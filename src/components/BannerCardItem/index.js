import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={`card ${className}`}>
      <h1 className="heading">{headerText}</h1>
      <p className="description">{description}</p>
      <div>
        <button className="button" type="button">
          Show more
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
