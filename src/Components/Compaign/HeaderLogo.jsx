import React from "react";

const HeaderLogo = () => {
  return (
    <>
      <div className="mt-5 pt-1">
        <div className="compaign_bg mt-4">
          <div className="container py-5">
            <div className="text-start">
              <h1 style={{lineHeight:"1.5"}}>
                Donate the <span className="text-danger fw-bolder">blood</span>,{" "}
                <br />
                Help the
                <span className="text-success fw-bolder">Humanity</span> <br />
                <span className="pt-5">Join Our Life-Saving Campaign</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderLogo;
