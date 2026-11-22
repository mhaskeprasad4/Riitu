<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit;
}

// Support JSON payload and form post
$input = file_get_contents('php://input');
$data = json_decode($input, true);
if (!$data || !is_array($data)) {
    $data = $_POST;
}

$name = trim($data['name'] ?? '');
$phone = trim($data['phone'] ?? '');
$email = trim($data['email'] ?? '');
$cohort = trim($data['cohort'] ?? 'ca-foundation');
$area = trim($data['area'] ?? 'Kharghar / Navi Mumbai');
$source = trim($data['source'] ?? 'Riitu Institution Web Portal');

if (empty($name) || empty($phone)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Name and phone number are required."]);
    exit;
}

$cohortMap = [
    'ca-foundation' => 'CA Foundation (Strict 15 Seats Cap)',
    'ca-inter' => 'CA Intermediate (Group 1 & 2)',
    'commerce-11-12' => '11th & 12th Commerce (Dual Track)',
    'school-6-10' => 'School Foundation (Classes 6-10)',
    'cs-cma' => 'CS Executive / CMA Intermediate',
    'college' => 'B.Com / BMS Mumbai University'
];
$cohortLabel = $cohortMap[$cohort] ?? htmlspecialchars($cohort);

$to = "enquiry@riituinstitution.com";
$rawSubject = "New Free Demo Booking: " . $name . " [" . $cohortLabel . "]";
$encodedSubject = "=?UTF-8?B?" . base64_encode($rawSubject) . "?=";

$serverDomain = $_SERVER['SERVER_NAME'] ?? "riituinstitution.com";
$fromEmail = "noreply@" . $serverDomain;

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Riitu Admissions Portal <" . $fromEmail . ">\r\n";
$headers .= "Reply-To: " . (!empty($email) ? $email : $fromEmail) . "\r\n";
$headers .= "Return-Path: <" . $fromEmail . ">\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "X-Priority: 1 (Highest)\r\n";

$istTime = date('d M Y, h:i A') . ' IST';
$cleanPhone = preg_replace('/[^0-9]/', '', $phone);
$waLink = "https://wa.me/91" . substr($cleanPhone, -10);

$htmlBody = "
<!DOCTYPE html>
<html>
<head><meta charset='UTF-8'></head>
<body style='font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; padding: 25px; margin: 0;'>
  <div style='max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06);'>
    <div style='background: #083F20; color: #ffffff; padding: 24px 28px; border-bottom: 3px solid #DCA416;'>
      <div style='font-size: 11px; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; color: #DCA416;'>RIITU INSTITUTION • ADMISSIONS DESK</div>
      <h2 style='margin: 6px 0 0; font-size: 22px; font-weight: 700; color: #ffffff;'>New Free Demo Class Booking</h2>
    </div>
    <div style='padding: 28px; color: #0f172a;'>
      <p style='margin: 0 0 20px; font-size: 14px; color: #334155; line-height: 1.5;'>A new student enquiry has been submitted on the website:</p>
      <table style='width: 100%; border-collapse: collapse; font-size: 14px;'>
        <tr>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600; width: 140px;'>Student Name:</td>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #083F20; font-size: 16px;'>" . htmlspecialchars($name) . "</td>
        </tr>
        <tr>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;'>Mobile Number:</td>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #083F20;'>
            <a href='tel:" . htmlspecialchars($phone) . "' style='color: #083F20; text-decoration: none; font-weight: bold;'>" . htmlspecialchars($phone) . "</a>
            &nbsp;•&nbsp;
            <a href='" . $waLink . "' target='_blank' style='color: #25D366; text-decoration: none; font-weight: bold;'>Open WhatsApp &rarr;</a>
          </td>
        </tr>
        " . (!empty($email) ? "
        <tr>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;'>Email Address:</td>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;'><a href='mailto:" . htmlspecialchars($email) . "' style='color: #083F20; font-weight: 600; text-decoration: none;'>" . htmlspecialchars($email) . "</a></td>
        </tr>" : "") . "
        <tr>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;'>Target Cohort:</td>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 700; color: #DCA416;'>" . $cohortLabel . "</td>
        </tr>
        <tr>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;'>Commute / Area:</td>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #0f172a;'>" . htmlspecialchars($area) . "</td>
        </tr>
        <tr>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;'>Source:</td>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;'>" . htmlspecialchars($source) . "</td>
        </tr>
        <tr>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 600;'>Timestamp:</td>
          <td style='padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;'>" . $istTime . "</td>
        </tr>
      </table>

      <div style='margin-top: 25px; padding: 16px; background: #E8F5E9; border-radius: 6px; border: 1px solid #6EE7B7;'>
        <p style='margin: 0; font-size: 13px; color: #083F20; font-weight: 600;'>
          Action Required: Please call or WhatsApp this student within 2 hours to confirm seat availability for the 15-student micro cohort.
        </p>
      </div>
    </div>
    <div style='background: #f8fafc; padding: 14px 28px; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; text-align: center;'>
      Riitu Institution • Shop 13 & 14, Landmark CHS, Sector 12, Kharghar, Navi Mumbai • Tel: +91-9512112938
    </div>
  </div>
</body>
</html>
";

$mailSent = @mail($to, $encodedSubject, $htmlBody, $headers);

http_response_code(200);
echo json_encode([
    "success" => true,
    "message" => "Demo booking request successfully delivered to enquiry@riituinstitution.com",
    "mailSent" => $mailSent
]);
?>
