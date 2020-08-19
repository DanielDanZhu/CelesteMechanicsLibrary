import React from 'react'
import ReactPlayer from 'react-player'
import {
  Link
} from 'react-router-dom';

import { data } from './data';
import { keywords } from './keywords';

class Page extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = [[]]

    for (let i = 0; i < data[this.props.name].text.length; i++) {
      data[this.props.name].text[i].forEach(element => {
        //keyword hyperlinks
        let pushed = false
        for (const word in keywords) {
          if (element.includes(word)) {
            items.push(element.slice(0, element.indexOf(word)))
            items.push(<Link to={keywords[word]} style={{textDecoration: 'none'}}>{word}</Link>)
            items.push(element.slice(element.indexOf(word)+word.length))
            pushed = true
          }
        }
        if (!pushed) {
          items.push(element)
        }
        items.push(<br />)
      });

      if (i < data[this.props.name].videos.length) {
        items.push(
          <div class="video_wrapper">
            <ReactPlayer
              url={data[this.props.name].videos[i]}
              controls={true}
              volume={0}
              loop={true}
              playing={true}
            />
          </div>
        )
      }
    }

    return (
      <div class="page">
        <div class="page_header">
          {data[this.props.name].title}
        </div>
        <hr />
        <div class="page_body">
          {items}
        </div>
      </div>
    )
  }
}

export default Page;
