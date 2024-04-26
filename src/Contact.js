import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 3rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;
      
      .contact-form {
        max-width: 50rem;
        margin: auto;
        
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.0230491642947!2d72.85881486407932!3d19.19419560323632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b719a27ccd21%3A0x186449f83d12e34!2sTIMES%20OF%20INDIA%20PRESS%2C%20Kandivali%2C%20Kandivali%20East%2C%20Mumbai%2C%20Maharashtra%20400101!5e0!3m2!1sen!2sin!4v1675847611543!5m2!1sen!2sin" width="100%" height="300" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <h2 className="common-heading1">LET'S<strong> TALK</strong></h2>
      <div className="container">
        <div className="contact-form">
          <form action="https://formsubmit.co/tonymone1234@gmail.com" method="POST" className="contact-inputs">
            <input type="text" placeholder="username" name="Username" required autoComplete="off" />
            <input type="email" placeholder="Enter email" name="Email" required autoComplete="off" />
            <textarea name="Message" cols="30" rows="10" required autoComplete="off" placeholder="Enter your massage"></textarea>
            <input type="submit" value="Send" />
            <input type="hidden" name="_captcha" value="false"/>
            <input type="hidden" name="_next" value="http://localhost:3000/"/>
            <input type="hidden" name="_subject" value="Free Legal Help"/>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;