import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xqkolvwn");
  if (state.succeeded) {
    return <div className="container p-5"><p>Thanks for your comment!</p><br></br><a href="/Contact" className='button'>Back</a></div>
    ;
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
        <h1 class="display-5 fw-bolder">CONTACT US</h1>
          <br></br>
          <form onSubmit={handleSubmit}>

            <label htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <p></p>
            <label>
              Message
            </label>
            <textarea
              id="message"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <p></p>
            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>

        </div>

      </div>
      <br></br>
      <div className="text-center">
        <a href="https://github.com/apeachcc" target="_blank">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width={"50px"} alt="Github Contact" />
        </a>
      </div>

    </div>


  );
}

export default Contact;