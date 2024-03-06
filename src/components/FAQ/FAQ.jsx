import React from 'react'

function FAQ() {
  return (
    <>
      <div className="faq">
        <div className="faq-2">
          <div className="faq-3">
            <div className="faq-4">How do I book a ride?</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cc702096ce94e02dd37457fd8c2126f46d09d8ac64a0ac5cd239b76824db412?apiKey=b5f3e675c69d443bb59ae6ade7d87645&"
              className="faq_img"
            />
          </div>
        </div>
        <div className="faq-5">
          <div className="faq-6">
            <div className="faq-7">What payment methods are accepted?</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7b9be934d018440e8de43ba487233583a7100b4e5991caa22d5bc541843bd9d?apiKey=b5f3e675c69d443bb59ae6ade7d87645&"
              className="faq_img-2"
            />
          </div>
        </div>
        <div className="faq-8">
          <div className="faq-9">
            <div className="faq-10">How are drivers vetted for safety?</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cc702096ce94e02dd37457fd8c2126f46d09d8ac64a0ac5cd239b76824db412?apiKey=b5f3e675c69d443bb59ae6ade7d87645&"
              className="faq_img"
            />
          </div>
        </div>
        <div className="faq-11">
          <div className="faq-12">
            <div className="faq-13">Is Voyago available in my city?</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cc702096ce94e02dd37457fd8c2126f46d09d8ac64a0ac5cd239b76824db412?apiKey=b5f3e675c69d443bb59ae6ade7d87645&"
              className="faq_img-3"
            />
          </div>
        </div>
        <div className="faq-14">
          <div className="faq-15">
            <div className="faq-16">Can I schedule a ride in advance?</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cc702096ce94e02dd37457fd8c2126f46d09d8ac64a0ac5cd239b76824db412?apiKey=b5f3e675c69d443bb59ae6ade7d87645&"
              className="faq_img"
            />
          </div>
        </div>
        <div className="faq-17">
          <div className="faq-18">
            <div className="faq-19">How do I contact customer support?</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7b9be934d018440e8de43ba487233583a7100b4e5991caa22d5bc541843bd9d?apiKey=b5f3e675c69d443bb59ae6ade7d87645&"
              className="faq_img"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .faq {
          background-color: var(--Colors-primary, #fff);
          display: flex;
          margin-top: 48px;
          flex-direction: column;
          font-size: 20px;
        }
        @media (max-width: 991px) {
          .faq {
            max-width: 100%;
            margin-top: 40px;
          }
        }
        .faq-2 {
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 15px;
          margin:10px 0;
        }
        @media (max-width: 991px) {
          .faq-2 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .faq-3 {
          justify-content: space-between;
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .faq-3 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .faq-4 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .faq_img {
          aspect-ratio: 0.96;
          object-fit: auto;
          object-position: center;
          width: 48px;
        }
        .faq-5 {
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          display: flex;
          margin-top: 24px;
          flex-direction: column;
          justify-content: center;
          padding: 15px;
          margin:10px 0;
        }
        @media (max-width: 991px) {
          .faq-5 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .faq-6 {
          justify-content: space-between;
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .faq-6 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .faq-7 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .faq_img-2 {
          aspect-ratio: 0.94;
          object-fit: auto;
          object-position: center;
          width: 47px;
        }
        .faq-8 {
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          display: flex;
          margin-top: 24px;
          flex-direction: column;
          justify-content: center;
          padding: 15px;
          margin:10px 0;
        }
        @media (max-width: 991px) {
          .faq-8 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .faq-9 {
          justify-content: space-between;
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .faq-9 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .faq-10 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .faq-11 {
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          display: flex;
          margin-top: 24px;
          flex-direction: column;
          justify-content: center;
          padding: 15px;
          margin:10px 0;
        }
        @media (max-width: 991px) {
          .faq-11 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .faq-12 {
          justify-content: space-between;
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .faq-12 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .faq-13 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .faq_img-3 {
          aspect-ratio: 0.92;
          object-fit: auto;
          object-position: center;
          width: 46px;
        }
        .faq-14 {
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          display: flex;
          margin-top: 24px;
          flex-direction: column;
          justify-content: center;
          padding: 15px;
          margin:10px 0;
        }
        @media (max-width: 991px) {
          .faq-14 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .faq-15 {
          justify-content: space-between;
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .faq-15 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .faq-16 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .faq-17 {
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          display: flex;
          margin-top: 24px;
          flex-direction: column;
          justify-content: center;
          padding: 15px;
          margin:10px 0;
        }
        @media (max-width: 991px) {
          .faq-17 {
            max-width: 100%;
            padding: 0 20px;
          }
        }
        .faq-18 {
          justify-content: space-between;
          display: flex;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .faq-18 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .faq-19 {
          font-family: Inter, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
      `}</style>
    </>
  )
}

export default FAQ
