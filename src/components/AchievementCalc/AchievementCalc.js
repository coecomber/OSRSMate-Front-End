import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'


class AchievementCalc extends Component {
    render() {

        return (
            <div className="AchievementCalc container">
                <div className="row">
                    <div className="col-12">
                    </div>
                </div>
                <div className="row grey-text">
                    <div className="col s12 m7 grey darken-2 grey-text text-darken-4">

                        <h5>Achievement calculator for <b>Grey Sheep</b></h5>

                        <br /><br />


                        <table>
                            <thead>
                                <tr>
                                    <th>Achievement</th>
                                    <th>Available</th>
                                    <th>Required Stats</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Ardougne <b>Easy</b> Diary</td>
                                    <td style={{color: "green"}} > <i class="small material-icons">check_box</i> </td>
                                    <td>15 Thieving</td>
                                </tr>
                                <tr>
                                    <td>Ardougne <b>Medium</b> Diary</td>
                                    <td style={{color: "green"}}> <i class="small material-icons">check_box</i> </td>
                                    <td>38 Thieving<br />
                                        39 Agility<br />
                                        38 Strength<br />
                                        21 Ranged<br />
                                        31 Farming<br />
                                        51 Magic<br />
                                        50 Firemaking<br />
                                        49 Crafting<br />
                                        50 Attack<br />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ardougne <b>Hard</b> Diary</td>
                                    <td style={{color: "green"}} > <i class="small material-icons">check_box</i> </td>
                                    <td>72 Thieving<br />
                                        39 Agility<br />
                                        38 Strength<br />
                                        21 Ranged<br />
                                        70 Farming<br />
                                        66 Magic<br />
                                        50 Firemaking<br />
                                        49 Crafting<br />
                                        50 Attack<br />
                                        59 Hunter<br />
                                        68 Smithing<br />
                                        50 Construction<br />
                                        65 Runecrafting<br />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ardougne <b>Elite</b> Diary</td>
                                    <td style={{color: "red"}} > <i class="small material-icons">indeterminate_check_box</i> </td>
                                    <td>82 Thieving<br />
                                        <i class="small material-icons" style={{fontSize: "15px", color: "red"}}>indeterminate_check_box</i>90 Agility<br />
                                        38 Strength<br />
                                        21 Ranged<br />
                                        85 Farming<br />
                                        94 Magic<br />
                                        50 Firemaking<br />
                                        49 Crafting<br />
                                        50 Attack<br />
                                        59 Hunter<br />
                                        91 Smithing<br />
                                        50 Construction<br />
                                        65 Runecrafting<br />
                                        81 Fishing<br />
                                        91 Cooking<br />
                                        69 Fletching<br />
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
)(AchievementCalc);