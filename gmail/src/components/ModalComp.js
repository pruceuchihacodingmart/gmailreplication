import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Mainsector from "./Mainsector";
import "./ModalCompcss.css";

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class ModalComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ToBox: "",
      SubjectBox: "",
      a: [],
      a1: [],
      undo: [],
      undoall: [],
      todelete: [],
      flag: true,
      flagme: false,
      counter: 0,
      i: 0,
      errors: {
        ToBox: "",
        SubjectBox: ""
      }
    };
  }

  onChanging = event => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "ToBox":
        errors.ToBox =
          value.length < 2 ? "Name must be 2 characters long!" : "";
        break;
      case "SubjectBox":
        errors.SubjectBox =
          value.length < 2 ? "Subject must be 2 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {});

    // this.setState({[e.target.name]:e.target.value})
  };

  handleSubmit = event => {
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
      this.handleView();
    } else {
      console.error("Invalid Form");
      alert("Invalid form ");
    }
  };

  handleView = e => {
    var aview = {
      names: this.state.ToBox,
      subjects: this.state.SubjectBox,
      id: this.state.i++,
      timestamp: Date.now()
    };
    var b = this.state.a;
    var c = this.state.a1;

    c.push(aview);
    b.push(aview);

    this.setState({ a: b });
    this.setState({ a1: c });

    this.setState({ undoall: b });
  };
  closeHandler = aas => {
    this.setState({ undo: aas });
    let newA = this.state.a.filter(index => index.id !== aas.id);
    this.setState({ a: newA });
    this.setState({ flag: false });
  };

  Selectlist(things) {
    this.state.todelete.push(things.timestamp);
    console.log(this.state.todelete);
  }

  undoHandler = () => {
    this.state.a.splice(this.state.undo.id, 0, this.state.undo);
    this.setState({ flag: true });
  };

  removeAll = () => {
    // this.setState({undoall:this.state.a})
    this.setState({ flagme: true });
    let b = this.state.a;
    for (let item of this.state.todelete) {
      for (let n of this.state.a) {
        if (n.timestamp === item) {
          b.splice(n, 1);
        }
      }
    }
    // for(var i=0;i<this.state.a.length;i++){
    //     for(var j=0;j<this.state.todelete.length;j++ ){
    //       if(this.state.todelete[j]!=i){
    //         b.push(this.state.a[i]);
    //       }
    //     }
    // }
    console.log(b);
    this.setState({ todelete: [] });
    this.setState({ a: b });
  };

  undoAllHandler = () => {
    console.log(this.state.a1);
    this.setState({ a: this.state.a1 });
  };

  render() {
    console.log(this.state.undoall);

    const { errors } = this.state;
    return (
      <div className="mainme">
        <Modal
          show={this.props.showme}
          style={{ marginTop: "25%", marginLeft: "30%" }}
        >
          <Modal.Header style={{ backgroundColor: "#202124", color: "white" }}>
            <Modal.Title>New Message</Modal.Title>
            <Button
              variant="secondary"
              style={{
                backgroundColor: "red",
                alignContent: "center",
                width: "2%",
                height: "2%"
              }}
              onClick={this.props.closeHandler}
            >
              X
            </Button>
          </Modal.Header>
          <Modal.Body>
            <form
              onSubmit={e => {
                e.preventDefault();
                this.props.closeHandler();
                this.handleSubmit();
              }}
            >
              <input
                type="text"
                name="ToBox"
                placeholder="To"
                onChange={this.onChanging}
                style={{
                  borderStyle: "inset",
                  width: "100%",
                  margin: "0 0 2% 0"
                }}
              />
              {errors.ToBox.length > 0 && (
                <span className="error">{errors.ToBox}</span>
              )}
              <input
                type="text"
                name="SubjectBox"
                placeholder="Subject"
                onChange={this.onChanging}
                style={{
                  borderStyle: "inset",
                  width: "100%",
                  margin: "0 0 2% 0"
                }}
              />
              {errors.SubjectBox.length > 0 && (
                <span className="error">{errors.SubjectBox}</span>
              )}
              <Modal.Footer>
                <div className="submit">
                  <button variant="primary">Create</button>
                </div>
              </Modal.Footer>
            </form>
          </Modal.Body>

          {/* <Button  
                        onClick={()=>{this.props.closeHandler()}} >
                        Save Changes
                    </Button>
           */}
        </Modal>

        <Mainsector
          name={this.state.a}
          flag={this.state.flag}
          Selectlist={this.Selectlist.bind(this)}
          undoHandler={this.undoHandler}
          undoAllHandler={this.undoAllHandler}
          removeAll={this.removeAll}
          closeHandler={this.closeHandler}
        />
      </div>
    );
  }
}
