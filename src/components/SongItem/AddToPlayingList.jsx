import React, { Component } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { connect } from 'react-redux';

class AddToPlayingList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { data } = this.props;
    this.props.addToPlayingList(data);
    message.success('已添加到播放列表');
  }

  render() {
    return (
      <PlusOutlined
        style={{
          fontSize: 20,
          display: 'block',
        }}
        onClick={this.handleClick}
        title="添加到播放列表"
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToPlayingList: (data) => {
      dispatch({ type: 'ADD_SONG_TO_PLAYING_LIST', data: data });
    },
  };
}

export default connect(null, mapDispatchToProps)(AddToPlayingList);