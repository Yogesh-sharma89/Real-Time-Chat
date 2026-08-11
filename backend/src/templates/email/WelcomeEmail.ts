interface WelcomeEmailProps {
  name: string;
  appName: string;
  dashboardLink: string;
}

export const welcomeEmail = ({
  name,
  appName,
  dashboardLink,
}: WelcomeEmailProps): string => {
  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>Welcome to ${appName}</title>

  <style>

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
      background: #050505;
      color: #ffffff;
      font-family:
        Inter,
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Arial,
        sans-serif;
    }

    table {
      border-spacing: 0;
      border-collapse: collapse;
    }

    img {
      border: 0;
      display: block;
    }

    /* ==========================================
       OUTER BACKGROUND
    ========================================== */

    .email-wrapper {
      width: 100%;
      padding: 50px 15px;

      background:
        radial-gradient(
          circle at 50% 0%,
          rgba(183, 255, 60, 0.16),
          transparent 35%
        ),
        radial-gradient(
          circle at 100% 100%,
          rgba(120, 80, 255, 0.10),
          transparent 35%
        ),
        #050505;
    }

    /* ==========================================
       MAIN CARD
    ========================================== */

    .email-container {
      width: 100%;
      max-width: 620px;
      margin: 0 auto;

      overflow: hidden;

      background: #0b0b0b;

      border: 1px solid #1e1e1e;

      border-radius: 28px;

      box-shadow:
        0 30px 100px rgba(0, 0, 0, 0.55),
        0 0 80px rgba(183, 255, 60, 0.04);
    }

    /* ==========================================
       TOP ACCENT
    ========================================== */

    .top-accent {
      height: 4px;

      background:
        linear-gradient(
          90deg,
          #b7ff3c,
          #ffffff,
          #b7ff3c
        );
    }

    /* ==========================================
       HERO
    ========================================== */

    .hero {
      position: relative;

      padding: 55px 45px 45px;

      text-align: center;

      overflow: hidden;
    }

    .hero-glow {
      position: absolute;

      width: 260px;
      height: 260px;

      top: -140px;
      left: 50%;

      transform: translateX(-50%);

      background: #b7ff3c;

      opacity: 0.12;

      border-radius: 50%;

      filter: blur(70px);
    }

    /* ==========================================
       LOGO
    ========================================== */

    .logo {
      position: relative;

      width: 64px;
      height: 64px;

      margin: 0 auto 28px;

      border-radius: 20px;

      background: #b7ff3c;

      color: #050505;

      font-size: 20px;
      font-weight: 900;

      line-height: 64px;

      text-align: center;

      box-shadow:
        0 0 35px rgba(183, 255, 60, 0.25);
    }

    /* ==========================================
       BADGE
    ========================================== */

    .badge {
      display: inline-block;

      padding: 7px 13px;

      border-radius: 999px;

      border: 1px solid rgba(183, 255, 60, 0.2);

      background: rgba(183, 255, 60, 0.06);

      color: #b7ff3c;

      font-size: 10px;

      font-weight: 700;

      letter-spacing: 2px;

      text-transform: uppercase;
    }

    /* ==========================================
       HEADING
    ========================================== */

    .heading {
      margin: 22px 0 0;

      color: #ffffff;

      font-size: 42px;

      line-height: 1.08;

      letter-spacing: -1.5px;

      font-weight: 800;
    }

    .name {
      color: #b7ff3c;
    }

    /* ==========================================
       DESCRIPTION
    ========================================== */

    .description {
      max-width: 470px;

      margin: 22px auto 0;

      color: #8e8e8e;

      font-size: 16px;

      line-height: 1.7;
    }

    /* ==========================================
       CTA
    ========================================== */

    .cta-wrapper {
      margin-top: 32px;
    }

    .cta {
      display: inline-block;

      padding: 16px 28px;

      border-radius: 999px;

      background: #b7ff3c;

      color: #050505 !important;

      font-size: 14px;

      font-weight: 800;

      text-decoration: none;

      box-shadow:
        0 12px 35px rgba(183, 255, 60, 0.18);
    }

    .cta:hover {
      background: #c9ff70 !important;
    }

    /* ==========================================
       FEATURES
    ========================================== */

    .features {
      padding: 0 35px 40px;
    }

    .feature {
      padding: 22px;

      border-radius: 18px;

      background: #101010;

      border: 1px solid #1e1e1e;
    }

    .feature-icon {
      font-size: 22px;

      margin-bottom: 10px;
    }

    .feature-title {
      margin-bottom: 6px;

      color: #ffffff;

      font-size: 14px;

      font-weight: 700;
    }

    .feature-description {
      color: #707070;

      font-size: 13px;

      line-height: 1.6;
    }

    /* ==========================================
       FOOTER
    ========================================== */

    .footer {
      padding: 25px 40px;

      border-top: 1px solid #191919;

      background: #080808;

      text-align: center;
    }

    .footer-text {
      color: #555555;

      font-size: 12px;

      line-height: 1.6;
    }

    /* ==========================================
       MOBILE
    ========================================== */

    @media only screen and (max-width: 600px) {

      .email-wrapper {
        padding: 20px 10px;
      }

      .hero {
        padding: 45px 25px 35px;
      }

      .heading {
        font-size: 34px;
      }

      .description {
        font-size: 14px;
      }

      .features {
        padding: 0 20px 30px;
      }

      .footer {
        padding: 22px 20px;
      }

    }

  </style>

</head>

<body>

<table
  role="presentation"
  width="100%"
  class="email-wrapper"
>

<tr>

<td align="center">

<table
  role="presentation"
  class="email-container"
>

<!-- ==========================================
     TOP ACCENT
========================================== -->

<tr>

<td>

<div class="top-accent"></div>

</td>

</tr>


<!-- ==========================================
     HERO
========================================== -->

<tr>

<td>

<div class="hero">

<div class="hero-glow"></div>


<!-- LOGO -->

<div class="logo">
  YS
</div>


<!-- BADGE -->

<div class="badge">
  ACCOUNT CREATED
</div>


<!-- HEADING -->

<h1 class="heading">

  Welcome,
  <span class="name">
    ${name}
  </span>
  👋

</h1>


<!-- DESCRIPTION -->

<p class="description">

  You're officially part of
  <strong style="color:#ffffff;">
    ${appName}
  </strong>.

  Your account is ready,
  and we're excited to have you here.

</p>


<!-- CTA -->

<div class="cta-wrapper">

<a
  href="${dashboardLink}"
  target="_blank"
  class="cta"
>
  Explore ${appName} →
</a>

</div>


</div>

</td>

</tr>


<!-- ==========================================
     FEATURES
========================================== -->

<tr>

<td>

<div class="features">

<table
  role="presentation"
  width="100%"
>

<tr>

<td
  width="50%"
  style="padding-right:7px;"
>

<div class="feature">

<div class="feature-icon">
  🚀
</div>

<div class="feature-title">
  Get started
</div>

<div class="feature-description">
  Jump straight into your workspace
  and start building.
</div>

</div>

</td>


<td
  width="50%"
  style="padding-left:7px;"
>

<div class="feature">

<div class="feature-icon">
  ⚡
</div>

<div class="feature-title">
  Built for you
</div>

<div class="feature-description">
  Everything is ready for you
  from day one.
</div>

</div>

</td>

</tr>

</table>

</div>

</td>

</tr>


<!-- ==========================================
     FOOTER
========================================== -->

<tr>

<td>

<div class="footer">

<p class="footer-text">

  You're receiving this email because
  you created an account on ${appName}.

  <br />

  Welcome to the journey. 🚀

</p>

</div>

</td>

</tr>


</table>

</td>

</tr>

</table>

</body>

</html>
`;
};