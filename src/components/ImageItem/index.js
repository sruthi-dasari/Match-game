import './index.css'
import {Component} from 'react'

class ImageItem extends Component {
  onThumbnailClick = () => {
    console.log('--> In onThumbnailClick()')
    const {imageDetails, activeImgId, updateScoreAndGetNextImg} = this.props
    const {id} = imageDetails

    if (id === activeImgId) {
      updateScoreAndGetNextImg()
    }
  }

  render() {
    const {imageDetails} = this.props
    const {thumbnailUrl} = imageDetails

    return (
      <li className="image-item-container">
        <button
          className="image-btn"
          type="button"
          onClick={this.onThumbnailClick}
        >
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
        </button>
      </li>
    )
  }
}

export default ImageItem
