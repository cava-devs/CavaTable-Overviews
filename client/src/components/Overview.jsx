import React from 'react';
import ReviewsOverview from './ReviewsOverview.jsx';
import TopTags from './TopTags.jsx';
import Description from './Description.jsx';
import RestaurantInfo from './RestaurantInfo.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantData: {},
    };
    this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel purus ex. Integer at nibh purus. Curabitur molestie blandit blandit. Suspendisse nibh nisl, laoreet vitae venenatis eget, mattis ac ante. Mauris feugiat dapibus justo, ac gravida sapien blandit eu. Maecenas ut ornare mi. Proin quis venenatis ex. Morbi ut libero est. Donec eget condimentum odio. Donec sed ex arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam consequat ipsum id nisl consequat malesuada. Etiam ultricies malesuada volutpat. Phasellus tristique commodo elit, eu bibendum diam pellentesque tristique. Vivamus tempus mi et elementum tincidunt. Maecenas laoreet nisi sit amet posuere mollis. Vestibulum convallis ut odio a efficitur. Mauris vulputate dictum lectus consectetur venenatis. Nulla sed lacus suscipit, pharetra purus eu, elementum tortor. Donec vel consequat dolor, at fermentum libero. Ut eu diam nec libero fringilla volutpat. Aliquam ac porttitor mauris. Quisque tempus ultrices nunc, ac finibus nunc sollicitudin quis. Mauris lobortis viverra dui sed finibus. Nunc volutpat pharetra velit vel convallis. Integer euismod malesuada metus vel vehicula. Duis gravida nisl a sem ultricies, et commodo tellus commodo. Maecenas aliquet diam tellus. Praesent eget odio ligula. Curabitur eleifend augue nec dolor viverra interdum. Ut et mauris eu ipsum congue bibendum et et nulla. Mauris consectetur vestibulum nulla vel feugiat. Ut quis sagittis nisi, ac mollis leo. Duis tincidunt augue vitae leo dictum, vel porta metus venenatis. Mauris sed erat dui. Phasellus volutpat scelerisque massa eget pretium. Cras non velit nec quam venenatis suscipit in quis neque. Morbi finibus lorem vel neque egestas, vel aliquet odio ornare. Nam imperdiet nec mi quis venenatis.';
  }

  render() {
    return (
      <div className="card border-top-0 border-left-0 border-right-0 rounded-0">
        <div className="card-body">
          <h1 className="overview-title">Restaurant Name</h1>
          <ReviewsOverview />
          <TopTags />
          <Description description={this.description}/>
          <RestaurantInfo />
        </div> 
      </div>
    );
  }
}

export default Overview;