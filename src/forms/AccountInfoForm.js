import React, { Component } from 'react';

class AccountInfoForm extends Component {

  constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      console.log(data);

      var payload = {
        "id": 1,
        "name": "AAd6dJ2SklbbE8RUDRlIVhU8MaNLh1A9SUZDUHPiZkWLFde6UNwG41yQHZEToHgJMXqyVZ9UcS"
      }
      fetch('/camel/api/bean', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(payload),
      });
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input type="input" className="form-control large" id="accountNumber" placeholder="xxxxxxxx-xxxxxxxx-xxxxxxxx" />
            <small>Magyarázó szöveg</small>
          </div>
          <div className="form-group col-md-2">
            <button type="submit" className="btn btn-primary">Get account info</button>
          </div>
        </div>
      </form>
    );
  }
}

export default AccountInfoForm;
