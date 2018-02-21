// src/components/Login/index.js
import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Layout } from 'antd';
import { Row, Col } from 'antd'
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.css';

const { Content } = Layout;
const FormItem = Form.Item;

class LoginForm extends Component {
  constructor () {
    super()
    this.state = {
        user: '',
        password: '',
      }

    this.updateEmail = this.updateEmail.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('good');
      }
    });
  }

  render() {
    const { className, ...props } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Layout style={{ height: '100vh',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'The email is not valid!',
              }, {
                required: true, message: 'Please enter your Email!',
              }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} value={this.state.email} onChange={this.updateEmail} placeholder="Email" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please enter your password!',
              }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" value={this.state.password} onChange={this.updatePassword} placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="/resetpassword">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </FormItem>
        </Form>
        </Content>
      </Layout>
    );
  }

  updateEmail (evt) {
    this.setState({
      email: evt.target.value
    });
  }
  updatePassword (evt) {
    this.setState({
      password: evt.target.value
    });
  }


}

export default Form.create()(LoginForm);