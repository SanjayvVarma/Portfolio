// import React, { useState } from "react";
// import PageHeaderContent from "../../component/pageHeaderContent";
// import { IoIosContacts } from "react-icons/io";
// import { Animate } from "react-simple-animate";
// import "./style.scss";

// const Contact = () => {
//   const [userData, setUserData] = useState({
//     Name: "",
//     Email: "",
//     Description: "",
//   })
//   return (
//     <section id="contact" className="contact">
//       <PageHeaderContent
//         headerText="My Contact"
//         icon={<IoIosContacts size={40} />}
//       />
//       <div className="contact__content">
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(-200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//           <h3 className="contact__content__header-text">Let's Talk</h3>
//         </Animate>
//         <Animate
//           play
//           duration={1}
//           delay={0}
//           start={{
//             transform: "translateX(200px)",
//           }}
//           end={{
//             transform: "translateX(0px)",
//           }}
//         >
//           <div className="contact__content__form">
//             <div className="contact__content__form__controlswrapper">
//               <div>
//                 <input
//                   required
//                   name="name"
//                   className="inputName"
//                   type={"text"}
//                  value={}
//                  onChange={postUser}
//                 />
//                 <label htmlFor="name" className="nameLabel">
//                   Name
//                 </label>
//               </div>
//               <div>
//                 <input
//                   required
//                   name="email"
//                   className="inputEmail"
//                   type={"text"}
//                 />
//                 <label htmlFor="email" className="emailLabel">
//                   Email
//                 </label>
//               </div>
//               <div>
//                 <textarea
//                   required
//                   name="description"
//                   className="inputDescription"
//                   type={"text"}
//                   rows="5"
//                 />
//                 <label htmlFor="description" className="descriptionLabel">
//                   Description
//                 </label>
//               </div>
//             </div>
//             <button>Submit</button>
//           </div>
//         </Animate>
//       </div>
//     </section>
//   );
// };
// export default Contact;

import React, { useState } from "react";
import PageHeaderContent from "../../component/pageHeaderContent";
import { IoIosContacts } from "react-icons/io";
import { Animate } from "react-simple-animate";
import "./style.scss";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    description: "",
  });

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value })
  }

  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, description } = userData;

    if (name && email && description) {
      const res = await fetch('https://portfoliodatarecods-default-rtdb.firebaseio.com/userDataRecords.json',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, email, description })
        }
      );
      if (res) {
        setUserData({
          name: "",
          email: "",
          description: "",
        })
        alert("data stored")
      } else {
        alert("plz fill the data")
      }
    } else {
      alert(`plz fill the data`)
    }
  }
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<IoIosContacts size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div method="POST" className="contact__content__form__controlswrapper">
              <div >
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                  value={userData.name}
                  onChange={postUserData}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                  value={userData.email}
                  onChange={postUserData}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                  value={userData.description}
                  onChange={postUserData}
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button onClick={submitData}>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;
