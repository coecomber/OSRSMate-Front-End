import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

class QuestCalc extends Component {
    render() {

        return (
            <div className="Highscore container">
                <div className="row">
                    <div className="col-12">
                    </div>
                </div>
                <div className="row grey-text">
                    <div className="col s12 m7 grey darken-2 grey-text text-darken-4">

                        <h5>Quest calculator for <b>Grey Sheep</b></h5>

                        <br /><br />

                        <table>
                            <thead>
                                <tr>
                                    <th>Quest</th>
                                    <th>Available</th>
                                    <th>Required Stats</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Troll Stronghold</td>
                                    <td style={{color: "green"}} > <i class="small material-icons">check_box</i> </td>
                                    <td>15 Agility</td>
                                </tr>
                                <tr>
                                    <td>Brightright of the Dwarves</td>
                                    <td style={{color: "red"}}> <i class="small material-icons">indeterminate_check_box</i> </td>
                                    <td>88 Mining<br />
                                        90 Fishing<br />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Song of the Elves</td>
                                    <td style={{color: "green"}} > <i class="small material-icons">check_box</i> </td>
                                    <td>70 Agility<br />
                                        70 Construction<br />
                                        70 Farming<br />
                                        70 Herblore<br />
                                        70 Hunter<br />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dragon Slayer II</td>
                                    <td style={{color: "green"}} > <i class="small material-icons">check_box</i> </td>
                                    <td>75 Magic<br />
                                        68 Mining<br />
                                        68 Mining<br />
                                        50 Construction<br />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Darkness Of Hallowvale</td>
                                    <td style={{color: "green"}} > <i class="small material-icons">check_box</i> </td>
                                    <td>5 Construction<br />
                                        20 Mining<br />
                                        22 Thieving<br />
                                        26 Agility<br />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <br /><br />


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
    return {
        state: state.questcalc
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestCalc);