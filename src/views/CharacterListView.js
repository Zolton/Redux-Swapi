import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getPeople } from "../actions/index";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <div>Hold your horses, it's fetching</div>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

mapStateToProps = state => {
  return {
    characters: state.characters,
    fetching: state.fetching
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getPeople }
)(CharacterListView);
/* mapStateToProps replaces null here */
