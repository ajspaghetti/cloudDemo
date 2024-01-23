import React, { useState } from 'react';
import EmailSubmission from './EmailSubmission';
import Socials from './Socials'
import { useSelector } from 'react-redux';

const Contact = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const user = useSelector((state: any) => state.user.user);
  const toggleForm = () => setShowEmailForm(!showEmailForm);

  return (
    <>
      <div>
        {!showEmailForm ? (
          <div>
            <Socials />
            <div>
              <button onClick={toggleForm} className="back-button p-2.5 px-5 rounded bg-[#bdb76b] border-none cursor-pointer text-white my-10 mx-auto block hover:bg-[#7da421] transition-all">Reach out directly</button>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <EmailSubmission user={user} />
            </div>
            <div>
              <button onClick={toggleForm} className="back-button p-2.5 px-5 rounded bg-[#bdb76b] border-none cursor-pointer text-white my-10 mx-auto block hover:bg-[#7da421] transition-all">Back to socials</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
