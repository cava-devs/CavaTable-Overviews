import React from 'react';
import TagEntry from './TagEntry.jsx';

class TopTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ['Good for Lunch', 'Vegetarian', 'Good for Kids', 'Good for Pets', 'Non-Smoking', 'Budget Meals', 'Catering', 'Wheelchair Accessible'],
    };
  }

  render() {
    return (
      <div id="topTagsContainer">
        <div className="tagSectionHeader">Top Tags:</div>
        <div className="tagSectionBody">
          <div className="tagScrollWrapper">
            {
              this.state.tags.map((tag, i) => <TagEntry tag={tag} key={i}/>)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default TopTags;