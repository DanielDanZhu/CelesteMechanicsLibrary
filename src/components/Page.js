import React from 'react'
import ReactPlayer from 'react-player'
import {
  Link
} from 'react-router-dom';

import { data } from './data';
import { keywords } from './keywords';

class Page extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const items = []

    //turns data.js into jsx
    for (let i = 0; i < data[this.props.name].text.length; i++) {
      data[this.props.name].text[i].forEach(element => {
        items.push(element)
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

    //adding hyperlinks to relevant pages
    let keywords_set = Object.assign({}, keywords)
    for (let i = 0; i < items.length; i++) {
      if (typeof(items[i]) == 'string') {
        for (const word in keywords_set) {
          if (items[i].toLowerCase().includes(word)) {
            let phrase = items[i], orig = phrase.slice(phrase.toLowerCase().indexOf(word), phrase.toLowerCase().indexOf(word)+word.length)
            items.splice(i, 0, phrase.slice(0, phrase.toLowerCase().indexOf(word)))
            items.splice(i+1, 1, <Link to={keywords_set[word]} style={{textDecoration: 'none'}}>{orig}</Link>)
            items.splice(i+2, 0, phrase.slice(phrase.toLowerCase().indexOf(word)+word.length))
            i += 2
            delete keywords_set[word]
          }
        }
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
