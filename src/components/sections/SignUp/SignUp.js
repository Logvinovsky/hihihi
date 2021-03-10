import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";

import React from "react";

import "./SignUp.scss";
import BlockTitle from "../../reusable/Block-title";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import File from "./File";
import RadioButtons from "./RadioButtons";
import ModalWindow from "../../reusable/ModalWindow";

configureAnchors({ offset: -60, scrollDuration: 800 });

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      nameDirty: false,
      nameError: "Name can't be empty",
      email: "",
      emailDirty: false,
      emailError: "Email can't be empty",
      phone: "",
      phoneDirty: false,
      phoneError: "phone can't be empty",
      position: "",
      formValid: false,

      // errors: {
      //     name: "Name can't be empty",
      //     email: "Email can't be empty",
      //     phone: "phone can't be empty",
      // },
      //
      // dirty: {
      //     name: false,
      //     email: false,
      //     phone: false,
      // }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.postRequest = this.postRequest.bind(this);
    this.getTokenRequest = this.getTokenRequest.bind(this);
    this.getPositionsRequest = this.getPositionsRequest.bind(this);
    this.getUserRequest = this.getUserRequest.bind(this);

    this.form = React.createRef();
    this.btn = React.createRef();
  }

  validateForm() {
    if (
      this.state.nameError ||
      this.state.emailError ||
      this.state.phoneError ||
      !this.state.position ||
      !this.state.photo
    ) {
      this.setState({ formValid: false });
    } else {
      this.setState({ formValid: true });
    }
  }

  handleChange(event) {
    const target = event.target;
    // eslint-disable-next-line default-case
    switch (target.name) {
      case "name":
        const nameRe = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
        if (!nameRe.test(event.target.value.toLowerCase())) {
          this.setState({ nameError: "Name isn't correct" });
        } else {
          this.setState({ nameError: "" });
        }
        break;

      case "email":
        const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRe.test(event.target.value.toLowerCase())) {
          this.setState({ emailError: "Email isn't correct" });
        } else {
          this.setState({ emailError: "" });
        }
        break;

      case "phone":
        const phoneRe = /^[+]{0,1}380([0-9]{9})$/;
        if (!phoneRe.test(event.target.value.toLowerCase())) {
          this.setState({ phoneError: "Number isn't correct" });
        } else {
          this.setState({ phoneError: "" });
        }
        break;
    }

    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      this.validateForm
    );
  }

  handleBlur(event) {
    // eslint-disable-next-line default-case
    switch (event.target.name) {
      case "name":
        this.setState({ nameDirty: true });
        if (event.target.value === "") {
          this.setState({ nameError: "Name can't be empty" });
        }
        break;

      case "email":
        this.setState({ emailDirty: true });
        if (event.target.value === "") {
          this.setState({ emailError: "Email can't be empty" });
        }
        break;

      case "phone":
        this.setState({ phoneDirty: true });
        if (event.target.value === "") {
          this.setState({ phoneError: "Number can't be empty" });
        }
        break;
    }
  }

  // request() {
  // async function request(url, method = "GET", data) {
  //   try {
  //   } catch (e) {
  //     console.warn("Error: ", e.message);
  //   }
  // }
  // }

  getTokenRequest() {
    (async function request() {
      try {
        const response = await fetch(
          "https://frontend-test-assignment-api.abz.agency/api/v1/token"
        );

        const result = await response.json();
        console.log(result);
        localStorage.setItem("token", result.token);
      } catch (error) {
        console.warn("Eroor:", error.message);
      }
    })();
  }

  getPositionsRequest() {
    (async function request() {
      try {
        const response = await fetch(
          "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
        );
        const result = await response.json();
        localStorage.setItem("positions", JSON.stringify(result.positions));

        console.log(result);
      } catch (error) {
        console.log("Error: ", error.message);
      }
    })();
  }

  getUserRequest() {
    (async function request() {
      try {
        const response = await fetch(
          "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=40"
        );
        const user = await response.json();
        console.log(user);
      } catch (e) {
        console.warn("Error: ", e.message);
      }
    })();
  }

  postRequest() {
    const form = this.form.current;
    const formData = new FormData(form);
    formData.append(
      "position_id",
      Array.from(form.position).findIndex((elem) => elem.checked) 
    );
    // console.log(Array.from(form.position).findIndex(elem => elem.checked));

    (async function request() {
      try {
        const response = await fetch(
          "https://frontend-test-assignment-api.abz.agency/api/v1/users",
          {
            method: "POST",
            headers: { token: localStorage.getItem("token") },
            body: formData,
          }
        );
        const result = await response.json();
        console.log(result);
      } catch (e) {
        console.warn("Error", e.message);
      }
    })();
  }

  componentDidMount() {
    this.getTokenRequest();
    this.getPositionsRequest();
    this.getUserRequest();
    console.log(localStorage);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postRequest();
  }

  render() {
    const positions = [
      "Frontend developer",
      "Backend developer",
      "Designer",
      "QA",
    ];
    return (
      <div className='sign-up'>
        <div className='section container'>
          <div className='sign-up__modal'>
            <ModalWindow />
          </div>
          <ScrollableAnchor id={"registration"}>
            <div className='sign-up__container'>
              <BlockTitle
                heading='Register to get a work'
                subheading='Attention! After successful registration and
                                 alert, update the list of users in the block from the top'
              />

              <form
                ref={this.form}
                className='sign-up__form'
                onSubmit={this.handleSubmit}>
                <Input
                  type='text'
                  name='name'
                  title='Name'
                  placeholder='Your name'
                  value={this.state.name}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  maxLength={16}
                  dirty={this.state.nameDirty}
                  error={this.state.nameError}
                />

                <Input
                  type='email'
                  name='email'
                  title='Email'
                  placeholder='Your email'
                  value={this.state.email}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  dirty={this.state.emailDirty}
                  error={this.state.emailError}
                />

                <Input
                  type='tel'
                  name='phone'
                  title='Phone phone'
                  placeholder='+380 XX XXX XX XX'
                  pattern='^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$'
                  maxLength={13}
                  value={this.state.phone}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  dirty={this.state.phoneDirty}
                  error={this.state.phoneError}
                />

                <RadioButtons
                  ref={this.btn}
                  options={positions}
                  name='position'
                  onChange={this.handleChange}
                  positions={localStorage.getItem("positions")}
                />

                <File name='photo' error='Error' onChange={this.handleChange} />

                <SubmitButton
                  value='Sign up now'
                  formValid={this.state.formValid}
                />
              </form>
            </div>
          </ScrollableAnchor>
        </div>
      </div>
    );
  }
}
