import React, { useState } from 'react';
import EmailSubmission from './EmailSubmission';
import { useSelector } from 'react-redux';
// import * as icons from '../../public/assets/icons';
// TODO: fix icon issues, move them to public and deal with it there.

const Contact = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const user = useSelector((state: any) => state.user.user);
  const toggleForm = () => setShowEmailForm(!showEmailForm);

  return (
    <>
      <div>
        {!showEmailForm ? (
          <div>
            <div className="flex flex-wrap justify-center gap-5">
              <a href="tel:+15713191994" className="contact-method flex flex-row items-center gap-2.5 p-5 border border-gray-300 rounded shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer text-black w-1/5 m-2">
                <img src={`${process.env.PUBLIC_URL}/phoneIcon.png`} alt="Phone" className="w-10 h-10" />
                <span className="flex-1 mr-10 text-right overflow-hidden overflow-ellipsis whitespace-nowrap">+1 (571) 319-1994</span>
              </a>

              <a href="mailto:alexander@spagno.li" className="contact-method flex flex-row items-center gap-2.5 p-5 border border-gray-300 rounded shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer text-black w-1/5 m-2">
                <img src={`${process.env.PUBLIC_URL}/emailIcon.png`} alt="Email" className="w-10 h-10" />
                <span className="flex-1 mr-10 text-right overflow-hidden overflow-ellipsis whitespace-nowrap">alexander@spagno.li</span>
              </a>

              <a href="https://www.instagram.com/ajspaghetti" className="contact-method flex flex-row items-center gap-2.5 p-5 border border-gray-300 rounded shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer text-black w-1/5 m-2" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/instagramIcon.png`} alt="Instagram" className="w-10 h-10" />
                <span className="flex-1 mr-10 text-right overflow-hidden overflow-ellipsis whitespace-nowrap">@ajspaghetti</span>
              </a>

              <a href="https://twitter.com/ajspaghetti" className="contact-method flex flex-row items-center gap-2.5 p-5 border border-gray-300 rounded shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer text-black w-1/5 m-2" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/xIcon.png`} alt="Twitter" className="w-10 h-10" />
                <span className="flex-1 mr-10 text-right overflow-hidden overflow-ellipsis whitespace-nowrap">@ajspaghetti</span>
              </a>

              <a href="https://www.discord.com/" className="contact-method flex flex-row items-center gap-2.5 p-5 border border-gray-300 rounded shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer text-black w-1/5 m-2" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/discordIcon.png`} alt="Discord" className="w-10 h-10" />
                <span className="flex-1 mr-10 text-right overflow-hidden overflow-ellipsis whitespace-nowrap">ajspaghetti</span>
              </a>

              <a href="https://www.linkedin.com/in/alexanderspagnoli" className="contact-method flex flex-row items-center gap-2.5 p-5 border border-gray-300 rounded shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer text-black w-1/5 m-2" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/linkedinIcon.png`} alt="LinkedIn" className="w-10 h-10" />
                <span className="flex-1 mr-10 text-right overflow-hidden overflow-ellipsis whitespace-nowrap">Alexander Spagnoli</span>
              </a>

              <a href="https://www.github.com/ajspaghetti" className="contact-method flex flex-row items-center gap-2.5 p-5 border border-gray-300 rounded shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer text-black w-1/5 m-2" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/githubIcon.png`} alt="GitHub" className="w-10 h-10" />
                <span className="flex-1 mr-10 text-right overflow-hidden overflow-ellipsis whitespace-nowrap">@ajspaghetti</span>
              </a>

              <a href="https://medium.com/@alexjspagnoli_21881" className="contact-method flex flex-row items-center gap-2.5 p-5 border border-gray-300 rounded shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer text-black w-1/5 m-2" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/mediumIcon.png`} alt="Medium" className="w-10 h-10" />
                <span className="flex-1 mr-10 text-right overflow-hidden overflow-ellipsis whitespace-nowrap">@alexjspagnoli_21881</span>
              </a>
            </div>
            <div>
              <button onClick={toggleForm} className="contact-button p-2.5 px-5 rounded bg-olive-drab border-none cursor-pointer text-white my-10 mx-auto block hover:bg-olive-darb-light transition-all">Reach out directly</button>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <EmailSubmission user={user} />
            </div>
            <div>
              <button onClick={toggleForm} className="back-button p-2.5 px-5 rounded bg-dark-khaki border-none cursor-pointer text-white my-10 mx-auto block hover:bg-khaki-light transition-all">Back to socials</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
