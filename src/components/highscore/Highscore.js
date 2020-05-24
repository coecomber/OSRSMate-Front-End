import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHighscoresByUsername } from '../../store/actions/highscoreActions'

class Highscore extends Component {

    componentDidMount(){
        this.props.getHighscoresByUsername('grey')
    }

    render() {
        const { highscore } = this.props.state;

        console.log(highscore)

        return (
            <div className="Highscore container">
                <div className="row">
                    <div className="col-12">
                    </div>
                </div>
                <div className="row grey-text">
                    <div className="col s12 m7 grey darken-2 grey-text text-darken-4">

                        <h5>Stats for <b>{highscore.name}</b></h5>

                        <br /><br />

                        <table>
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Level</th>
                                    <th>Experience</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Overall</td>
                                    <td>2,185</td>
                                    <td>{ highscore.overallExp }</td>
                                </tr>
                                <tr>
                                    <td>Attack</td>
                                    <td>99</td>
                                    <td>{ highscore.attackExp }</td>
                                </tr>
                                <tr>
                                    <td>Defence</td>
                                    <td>90</td>
                                    <td>{ highscore.defenceExp }</td>
                                </tr>
                                <tr>
                                    <td>Strength</td>
                                    <td>99</td>
                                    <td>{ highscore.strengthExp }</td>
                                </tr>
                                <tr>
                                    <td>Hitpoints</td>
                                    <td>102</td>
                                    <td>{ highscore.hitpointsExp }</td>
                                </tr>
                                <tr>
                                    <td>Ranged</td>
                                    <td>104</td>
                                    <td>{ highscore.rangedExp }</td>
                                </tr>
                                <tr>
                                    <td>Prayer</td>
                                    <td>86</td>
                                    <td>{ highscore.prayerExp }</td>
                                </tr>
                                <tr>
                                    <td>Magic</td>
                                    <td>98</td>
                                    <td>{ highscore.magicExp }</td>
                                </tr>
                                <tr>
                                    <td>Cooking</td>
                                    <td>99</td>
                                    <td>{ highscore.cookingExp }</td>
                                </tr>
                                <tr>
                                    <td>Woodcutting</td>
                                    <td>99</td>
                                    <td>{ highscore.woodcuttingExp }</td>
                                </tr>
                                <tr>
                                    <td>Fletching</td>
                                    <td>98</td>
                                    <td>{ highscore.fletchingExp }</td>
                                </tr>
                                <tr>
                                    <td>Fishing</td>
                                    <td>99</td>
                                    <td>{ highscore.fishingExp }</td>
                                </tr>
                                <tr>
                                    <td>Firemaking</td>
                                    <td>99</td>
                                    <td>{ highscore.firemakingExp }</td>
                                </tr>
                                <tr>
                                    <td>Crafting</td>
                                    <td>92</td>
                                    <td>{ highscore.craftingExp }</td>
                                </tr>
                                <tr>
                                    <td>Smithing</td>
                                    <td>88</td>
                                    <td>{ highscore.smithingExp }</td>
                                </tr>
                                <tr>
                                    <td>Mining</td>
                                    <td>94</td>
                                    <td>{ highscore.miningExp }</td>
                                </tr>
                                <tr>
                                    <td>Herblore</td>
                                    <td>91</td>
                                    <td>{ highscore.herbloreExp }</td>
                                </tr>
                                <tr>
                                    <td>Agility</td>
                                    <td>86</td>
                                    <td>{ highscore.agilityExp }</td>
                                </tr>
                                <tr>
                                    <td>Thieving</td>
                                    <td>99</td>
                                    <td>{ highscore.thievingExp }</td>
                                </tr>
                                <tr>
                                    <td>Slayer</td>
                                    <td>97</td>
                                    <td>{ highscore.slayerExp }</td>
                                </tr>
                                <tr>
                                    <td>Farming</td>
                                    <td>93</td>
                                    <td>{ highscore.farmingExp }</td>
                                </tr>
                                <tr>
                                    <td>Runecrafting</td>
                                    <td>87</td>
                                    <td>{ highscore.runecraftExp }</td>
                                </tr>
                                <tr>
                                    <td>Hunter</td>
                                    <td>99</td>
                                    <td>{ highscore.hunterExp }</td>
                                </tr>
                                <tr>
                                    <td>Construction</td>
                                    <td>87</td>
                                    <td>{ highscore.constructionExp }</td>
                                </tr>
                            </tbody>
                        </table>

                        <br /><br />

                        <img src="https://i.gyazo.com/11687966fd51c519443b16910c0eafeb.png" alt="Highscores Graph" />

                    </div>
                    <div className="col s12 m4 offset-m1 grey darken-2 grey-text text-darken-4">
                        <p>The highscores will be updated at least once an hour. If you want your character to show up in the list please <a href="/profile">Connect your character to your OSRSMate account.</a></p>
                        <p>The registered characters are:</p>
                        <ul>
                            <li><i>Grey Sheep</i></li>
                            <li><i>Azure Sheep</i></li>
                            <li><i>Alpaca Sheep</i></li>
                            <li><i>Green Sheep</i></li>
                            <li><i>Grondwortel</i></li>
                            <li><i>Connectie</i></li>
                            <li><i>Ruljo026</i></li>
                        </ul>

                        <br />
                        <p>This page and website uses multiple data sources. The backend made by the OSRSMate team (Joost van Herwaarden) can be found on the following page: <a href="http://217.101.44.31:8090/swagger-ui.html">http://217.101.44.31:8090/swagger-ui.html</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.highscore);
    return {
        state: state.highscore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHighscoresByUsername: (highscores) => dispatch(getHighscoresByUsername('grey'))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Highscore);