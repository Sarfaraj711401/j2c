import { Link } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";

const Register = () => {

    // Get query params (same as request.getParameter)
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    let type = params.get("type");
    if (!type) type = "jobseeker";

    let displayName = "";
    switch (type) {
        case "intern":
            displayName = "Intern";
            break;
        case "course":
            displayName = "Course";
            break;
        case "careergap":
            displayName = "Career Gap";
            break;
        default:
            displayName = "Jobseeker";
    }

    const clientId =
        "465339577351-p69vdttuusb9579ld9g4cna876kiae87.apps.googleusercontent.com";

    const redirectUri = "https://j2c.in/googleCallback";

    // Build OAuth URL (same as JSP)
    const oauthURL =
        "https://accounts.google.com/o/oauth2/v2/auth" +
        "?scope=email%20profile" +
        "&access_type=offline" +
        "&include_granted_scopes=true" +
        "&response_type=code" +
        "&state=" + encodeURIComponent(type) +
        "&redirect_uri=" + redirectUri +
        "&client_id=" + clientId;

    return (
        <>
            <style>{`
        body {
          background: #f0f4f8;
          padding-top: 120px;
          font-family: Arial;
        }
        .box {
          max-width: 420px;
          margin: auto;
          background: #fff;
          padding: 35px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          text-align: center;
        }
        .google-btn {
          background: white;
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 8px;
          width: 100%;
        }
        .email-btn {
          width: 100%;
          margin-top: 15px;
        }
      `}</style>

            <div className="box">
                <h3>Create Your {displayName} Account</h3>
                <p className="text-muted">Choose how you want to sign up</p>

                {/* Google Login */}
                <a href={oauthURL}>
                    <button className="google-btn">
                        <img
                            src="/images/google.png"
                            alt="google"
                            width="20"
                            style={{ marginRight: "8px" }}
                        />
                        Continue with Google
                    </button>
                </a>

                <hr />

                {/* Email Register */}
                <Link to={`/emailRegister?type=${type}`}>
                    <button className="btn btn-primary email-btn">
                        Continue with Email
                    </button>
                </Link>
            </div>
        </>
    );
};

export default Register;