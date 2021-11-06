import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';

import SearchBar from './SearchBar';
import { themeColor } from '../config';

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Row type="flex" align="middle" className="container">
        <Col span={6}>
          <Link to="/">
            <h1
              style={{
                display: 'inline',
                color: themeColor,
                fontWeight: 360,
              }}
            >
              Tonzhon Lite
            </h1>
          </Link>
        </Col>
        <Col span={4}>
          <Link to="/netease-playlist/6774517990" style={{ fontSize: 16 }}>
            网易歌单
          </Link>
        </Col>
        <Col span={10}>
          <SearchBar />
        </Col>
        <Col span={4} style={{ textAlign: 'right' }}>
          {/* <a href="https://github.com/enzeberg/tonzhon-lite"
            target="blank"
          >
            <GithubOutlined style={{ fontSize: 'large' }} />
          </a> */}
          <Button icon={<GithubOutlined style={{ fontSize: 'large' }} />}
            href="https://github.com/enzeberg/tonzhon-lite"
            target="_blank"
          >
            GitHub
          </Button>
        </Col>
      </Row>
    );
  }
}

export default Header;