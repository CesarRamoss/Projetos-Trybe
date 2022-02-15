import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from '../components/Form';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    return (
      <>
        <header>
          <nav>
            <ul>
              <li data-testid="email-field">{ email }</li>
              <li data-testid="total-field">
                { expenses.reduce((acc, item) => {
                  const valor = Number(item.value)
                  * Number(item.exchangeRates[item.currency].ask);
                  return acc + valor;
                }, 0).toFixed(2)}
              </li>
              <li data-testid="header-currency-field">BRL</li>
            </ul>
          </nav>
        </header>
        <Form />
        <Table />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string,
  expenses: PropTypes.object,
}.isRequired;

export default connect(mapStateToProps)(Wallet);
