import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@arco-design/web-react";
import R404 from "../../assets/img/404.png";

export default function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404";
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", textAlign: "center" }}>
      <img src={R404} style={{ height: "80%", width: "80%" }} />
      <div>
        <p>你来到了没有知识的荒原！</p>
        <Button
          type="primary"
          onClick={() => {
            navigate("/Home");
          }}
          style={{ marginTop: "20px" }}
        >
          Go Back
        </Button>
      </div>
    </div>
  );
}
