const About = {
    template: `<main>
    <section class="page-section bg-primary text-white mb-0" id="about">
        <div class="container">
            <!-- About Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-white" id="title">About</h2>
            <!-- Icon Divider-->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- About Section Content-->
            <div class="row">
                <div class="bodycontent">
                    <h3>Mission</h3><br>
                    <p class="indent">To support young athletes living in Chicago's northside neighborhoods, who have an
                        interest in
                        learning and playing soccer, with opportunities to learn and practice skills related to the game
                        of soccer,
                        specifically those skills around team cooperation and good sportsmanship.</p>

                    <h3>Vision</h3><br>
                    <p class="indent">The Northside Youth Soccer League aspires to develop strong, well-rounded, and
                        mindful athletes
                        through the building of character, self-discipline, and leadership.</p>

                    <h3>General Information</h3><br>
                    <p class="indent">The Northside Youth Soccer League was established in 1996 to provide athletes
                        residing in
                        Chicago's northside neighborhoods an environment in which to learn and play soccer. To be a
                        member of NYSL, you
                        must be between the ages of 4 - 12 and reside in a Chicago northside neighborhood. NYSL is run
                        by a small
                        full-time staff, and relies on the generous volunteer time of parents and previous league
                        members.</p>
                </div>
            </div>
        </div>
        </div>
    </section>
    <!-- Copyright Section-->
    <div class="copyright py-4 text-center text-white">
        <div class="container"><small> © Northside Youth Soccer League 2021 </small></div>
    </div>

    </main>`
}

const Home = {
    template: `<main>
    <section class="page-section" id="home">
        <div class="container">
        
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0 " id="title">Upcoming Events</h2>
        
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <div class="bodycontent">
                <div id="upcoming">
                    <h4>August 4</h4><br>
                    <p class="indent">NYSL Fundraiser</p>

                    <h4>August 16</h4><br>
                    <p class="indent">Season Kick-off: Meet the Teams</p>

                    <h4>September 1</h4><br>
                    <p class="indent"> First Game of the Season <a
                        class="nav-link py-3 px-0 px-lg-3 rounded" href="#/gameInfo">(Check Game
                        Schedule for
                        details)</a>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- Copyright Section-->
    <div class="copyright py-4 text-center text-white">
        <div class="container"><small> © Northside Youth Soccer League 2021 </small></div>
    </div>

    </main>`
}

const Registration = {
    template: `<main>
    <head>
    <script type="text/x-template" id="modal-template">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">


              <div class="modal-body">
                <slot name="body">
                  <button class="modal-default-button" @click="$emit('close')">
                    Close
                  </button>
                </slot>
              </div>

              <div class="modal-footer">
                <slot name="footer">
                  <p align=center>&nbsp;</p>
<h1 align=center><font size="+1">The following information has been registered correctly:</font></h1>

<table border="1" align=center width="226">
  <tr>
    <th align="center">Form Field</th>
    <th align="center">Field Value</th>
  </tr>

<script language="javascript">
var args = location.search.substr(1).split('&');
for (var i = 0; i < args.length; ++i) {
  var parts = args[i].split('=');
  if (parts != null) {
    var field = parts[0];
    var value = parts[1];
    if (value == null) {
      value = "null"
    }
    else {
      value = '"' + unescape(value.replace(/\+/g, ' ')) + '"';
    }

    document.writeln('<tr><td align="center">' + field + '</td>');
    document.writeln('<td align="center">' + value + '</td></tr>');
  }
}
</script>

                 
                </slot>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </script>
    </head>
    <!-- Registration Section-->
    <section class="page-section" id="registration">
        <div class="container">
            <!-- Registration Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0" id="title">Registration Form</h2>
            <!-- Icon Divider-->
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- Registration Form-->
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <form method="get" action="show_data.html">
                        <div class="stylized">
                            <label for="first_name">Player's First Name:<input type="text" name="first_name"
                                    id="first_name" /></label>
                            <label for="last_name">Last Name:<input type="text" name="last_name"
                                    id="last_name" /><br></label>
                            <label for="street_address">Street Address:<input type="text" name="street_address"
                                    id="street_address" /></label>
                            <label for="city">City of Residence:<input type="text" name="city" id="city" /></label><br>
                            <label for="zip">Zip Code:<input type="text" name="zip" id="zip" /></label><br>
                            <label for="birth_date">Birth Date:<input type="text" name="birth_date"
                                    id="birth_date" /></label>
                            <label for="parent_guardian">Parent/Guardian Name:<input type="text" name="parent_guardian"
                                    id="parent_guardian" /></label>
                            <label for="contact_phone">Contact Phone:<input type="text" name="contact_phone"
                                    id="contact_phone" /></label>
                            <label for="contact_email">Contact Email:<input type="text" name="contact_email"
                                    id="contact_email" /></label>

                        </div>
                        <fieldset>
                            <legend>Gender:</legend>
                            <label for="female">Female</label>
                            <input type="radio" name="gender" id="female" value="female" />
                            <label for="male">Male</label>
                            <input type="radio" name="gender" id="male" value="male" />
                        </fieldset>

                        <fieldset>
                            <legend>Grade:</legend>
                            <label for="pre_school">Pre-School</label>
                            <input type="radio" name="grade" id="pre_school" value="pre_school" />
                            <label for="1st">1st</label>
                            <input type="radio" name="grade" id="1st" value="1st" />
                            <label for="2nd">2nd</label>
                            <input type="radio" name="grade" id="2nd" value="2nd" />
                            <label for="3rd">3rd</label>
                            <input type="radio" name="grade" id="3rd" value="3rd" />
                            <label for="4th">4th</label>
                            <input type="radio" name="grade" id="4th" value="4th" />
                            <label for="5th">5th</label>
                            <input type="radio" name="grade" id="5th" value="5th" />
                        </fieldset>

                        <fieldset>
                            <legend>Which elementary schools do you live near?</legend>
                            <label for="school_1" class="impinfo">First Closest School:</label>
                            <select name="school_1" id="school_1">
                                <option value="katzenmaier">AJ Katzenmaier</option>
                                <option value="greenbay">Greenbay</option>
                                <option value="yeager">Howard A Yeager</option>
                                <option value="hart">Marjorie P Hart</option>
                                <option value="north">North Elementary</option>
                                <option value="south">South Elementary</option>
                            </select>

                            <label for="school_2" class="impinfo">Second Closest School:</label>
                            <select name="school_2" id="school_2">
                                <option value="katzenmaier">AJ Katzenmaier</option>
                                <option value="greenbay">Greenbay</option>
                                <option value="yeager">Howard A Yeager</option>
                                <option value="hart">Marjorie P Hart</option>
                                <option value="north">North Elementary</option>
                                <option value="south">South Elementary</option>
                            </select>
                        </fieldset>

                        <fieldset>
                            <legend>What position(s) do you normally play? <span class="note">(check all that
                                    apply)</span></legend>
                            <label for="n_forward">Forward</label>
                            <input type="checkbox" name="normal_position" id="n_forward" value="n_forward" />
                            <label for="n_defense">Defense</label>
                            <input type="checkbox" name="normal_position" id="n_defense" value="n_defense" />
                            <label for="n_midfield">Midfield</label>
                            <input type="checkbox" name="normal_position" id="n_midfield" value="n_midfield" />
                            <label for="n_goalkeeper">Goalkeeper</label>
                            <input type="checkbox" name="normal_position" id="n_goalkeeper" value="n_goalkeeper" />
                        </fieldset>

                        <fieldset>
                            <legend>What position(s) do you want to play? <span class="note">(check all that
                                    apply)</span></legend>
                            <label for="w_forward">Forward</label>
                            <input type="checkbox" name="want_position" id="w_forward" value="w_forward" />
                            <label for="w_defense">Defense</label>
                            <input type="checkbox" name="want_position" id="w_defense" value="w_defense" />
                            <label for="w_midfield">Midfield</label>
                            <input type="checkbox" name="want_position" id="w_midfield" value="w_midfield" />
                            <label for="w_goalkeeper">Goalkeeper</label>
                            <input type="checkbox" name="want_position" id="w_goalkeeper" value="w_goalkeeper" />
                        </fieldset>

                        <label for="uniform" class="impinfo">Already Have a Uniform</label>
                        <input type="checkbox" name="uniform" id="uniform" />

                        <fieldset>
                            <legend>Jersey Size:</legend>
                            <span class="uniformchoice">
                                <label for="j_y_small">Youth Small</label>
                                <input type="radio" name="jersey_size" id="j_y_small" value="j_y_small" />
                                <label for="j_y_medium">Youth Medium</label>
                                <input type="radio" name="jersey_size" id="j_y_medium" value="j_y_medium" />
                                <label for="j_y_large">Youth Large</label>
                                <input type="radio" name="jersey_size" id="j_y_large" value="j_y_large" />
                                <label for="j_small">Small</label>
                                <input type="radio" name="jersey_size" id="j_small" value="j_small" />
                                <label for="j_medium">Medium</label>
                                <input type="radio" name="jersey_size" id="j_medium" value="j_medium" />
                                <label for="j_large">Large</label>
                                <input type="radio" name="jersey_size" id="j_large" value="j_large" />
                                <label for="j_x_large">Extra-Large</label>
                                <input type="radio" name="jersey_size" id="j_x_large" value="j_x_large" />
                            </span>
                        </fieldset>

                        <fieldset>
                            <legend>Shorts Size:</legend>
                            <span class="uniformchoice">
                                <label for="s_y_small">Youth Small</label>
                                <input type="radio" name="shorts_size" id="s_y_small" value="s_y_small" />
                                <label for="s_y_medium">Youth Medium</label>
                                <input type="radio" name="shorts_size" id="s_y_medium" value="s_y_medium" />
                                <label for="s_y_large">Youth Large</label>
                                <input type="radio" name="shorts_size" id="s_y_large" value="s_y_large" />
                                <label for="s_small">Small</label>
                                <input type="radio" name="shorts_size" id="s_small" value="s_small" />
                                <label for="s_medium">Medium</label>
                                <input type="radio" name="shorts_size" id="s_medium" value="s_medium" />
                                <label for="s_large">Large</label>
                                <input type="radio" name="shorts_size" id="s_large" value="s_large" />
                                <label for="s_x_large">Extra-Large</label>
                                <input type="radio" name="shorts_size" id="s_x_large" value="s_x_large" />
                            </span>
                        </fieldset>

                        <h3>Permission to Play</h3>
                        <div class="contract">
                            <p>
                                I, the parent or guardian of the minor registrant, agree that the registrant and I will
                                abide by all the rules
                                of the Northside Youth Soccer League (NYSL). In recognizing the possibility of physical
                                injury associated with
                                soccer and in consideration for the "League" accepting the registrant for its soccer
                                programs and activities,
                                I hereby release, discharge, and/or otherwise indemnify NYSL, their employees and
                                associated personnel and
                                volunteers, including the facilities used for practices and games, against any claim by
                                or on behalf of the
                                registrant as a result of the registrant's participation in the program and/or being
                                transported to or from
                                NYSL sponsored activities, which transportation.
                            </p>
                            <p>
                                By entering my name below, I hereby agree and authorize the above. In addition, by
                                entering my name below, I
                                also acknowledge that I have read the cancellation policy and agree to its terms.
                            </p>
                            <p>
                                <label for="signature">Parent/Guardian Signature:<input type="text" name="signature"
                                        id="signature"></label>
                                <label for="sig_date">Date:<input type="text" name="sig_date" id="sig_date"></label>
                            </p>
                        </div>
                    </form>

                    <button type="button" class="btn" onclick="displayData()">Register Now</button>
                    <div style="display:none" id="registrationData">
                        <h4>Your information has been registered successfully!</h4>
                        <h5>We will be in contact as soon as possible!</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Copyright Section-->
    <div class="copyright py-4 text-center text-white">
        <div class="container"><small> © Northside Youth Soccer League 2021 </small></div>
    </div>

    </main>`
}

const GameInfo = {
    template: `<main>
    <section class="page-section bg-primary text-white mb-0" id="game-info">
        <div class="container">
            <!-- Game Info Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-white" id="title">NYSL Game Information</h2>
            <!-- Icon Divider-->
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- Game Info Content-->
            <div class="row">
                <div class="bodycontent">
                    <div class="bodycontent">
                        <h2><em>Fall Schedule</em></h2>
                        <p class="announcement">*All games take place on Saturday</p>
                        <div id="gameApp1" style="text-align: left;  height:250px;overflow:auto;">
                            <table v-if="games" class="table smart-table table-sm"
                                style="background-color: rgb(181, 247, 215); ">
                                <thead class="thead-dark">
                                    <tr>
                                        <th>Date</th>
                                        <th>Teams</th>
                                        <th>Location</th>
                                        <th>Times</th>
                                        <th>Info</th>
                                        <th>Message Board</th>

                                    </tr>
                                </thead>
                                <tbody v-if="games.length">
                                    <tr v-for="game in games" :key="game.id">
                                    <td> {{ game.date }} </td>
                                    <td> {{ game.teams }} </td>
                                    <td> <a href="#/locations"> {{ game.location }} </a></td>
                                    <td> {{ game.time }} </td>
                                    <td><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#"
                                            data-toggle="modal" data-target="#match1">&#9432;</a></td>
                                    <td><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#/messages">&#x270e;</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br>
                        <p><br><strong>Facility Type:</strong> Outdoor</p>
                        <p><strong>Additional Information:</strong> If deemed necessary by NYSL, games may be shortened
                            or cancelled due to
                            extreme weather conditions.</p>
                        <p><strong>Please direct all questions to:</strong> Michael Randall, League Coordinator</p>
                        <address>
                            <p><span style="float: left;"><strong>Phone:</strong> (630) 690-8132</span></p>
                            <p style="float: right"><strong>Email:</strong> <a
                                    href="mailto:michael.randall@chisoccer.org">michael.randall@chisoccer.org</a></p>
                        </address>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Copyright Section-->
    <div class="copyright py-4 text-center text-white">
        <div class="container"><small> © Northside Youth Soccer League 2021 </small></div>
    </div>
    </main>`,
    data() {
        return {
            games: null
        }
    },
    created() {
        retrieveGames(function (error, games) {
            if (error) return alert(error.message)

            this.games = games
        }.bind(this))
    }
}

const Locations = {
    template: `<main>
    <!-- Locations Section-->
    <section class="page-section location" id="locations">
        <div class="container">
            <!-- location Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0" id="title">Locations</h2>
            <!-- Icon Divider-->
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- Locations Items-->
            <div class="row justify-content-center">
                <!-- AJ Katzenmaier School-->
                <div class="col-md-6 col-lg-4 mb-5">
                
                    <div class="location-item mx-auto" data-toggle="modal" data-target="#locationModal1">
                        <div class="location-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="location-item-caption-content text-center text-white"><i
                                    class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/location/school1.png" alt="" />
                        <p>AJ Katzenmaier School </p>
                    </div>
                </div>
                <!-- Greenbay School-->
                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="location-item mx-auto" data-toggle="modal" data-target="#locationModal2">
                        <div class="location-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="location-item-caption-content text-center text-white"><i
                                    class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/location/school2.png" alt="" />
                        <p>Greenbay School</p>
                    </div>
                </div>
                <!-- Howard A Yeager School-->
                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="location-item mx-auto" data-toggle="modal" data-target="#locationModal3">
                        <div class="location-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="location-item-caption-content text-center text-white"><i
                                    class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/location/school3.png" alt="" />
                        <p>Howard A Yeager School</p>
                    </div>
                </div>
                <!-- Marjorie P Hart School-->
                <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                    <div class="location-item mx-auto" data-toggle="modal" data-target="#locationModal4">
                        <div class="location-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="location-item-caption-content text-center text-white"><i
                                    class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/location/school4.png" alt="" />
                        <p>Marjorie P Hart School</p>
                    </div>
                </div>
                <!-- North Elementary School-->
                <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                    <div class="location-item mx-auto" data-toggle="modal" data-target="#locationModal5">
                        <div class="location-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="location-item-caption-content text-center text-white"><i
                                    class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/location/school5.png" alt="" />
                        <p>North Elementary School</p>
                    </div>
                </div>
                <!-- South Elementary School-->
                <div class="col-md-6 col-lg-4">
                    <div class="location-item mx-auto" data-toggle="modal" data-target="#locationModal6">
                        <div class="location-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="location-item-caption-content text-center text-white"><i
                                    class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/location/school6.png" alt="" />
                        <p>South Elementary School</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Copyright Section-->
    <div class="copyright py-4 text-center text-white">
        <div class="container"><small> © Northside Youth Soccer League 2021 </small></div>
    </div>

    <!-- Locations Modals-->
    <!-- Location Modal 1-->
    <div class="location-modal modal fade" id="locationModal1" tabindex="-1" role="dialog"
        aria-labelledby="locationModal1Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                </button>
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <!-- location Modal - Title-->
                                <h2 class="location-modal-title text-secondary text-uppercase mb-0"
                                    id="locationModal1Label">AJ Katzenmaier School</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <!-- location Modal - map-->
                                <div id="maps">
                                    <iframe class="img-fluid rounded mb-5"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426177!2d-87.6312390848914!3d41.90029637200441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20Stati%20Uniti!5e0!3m2!1sit!2ses!4v1612949750367!5m2!1sit!2ses"
                                        width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""
                                        aria-hidden="false" tabindex="0"></iframe>
                                </div>
                                <!-- location Modal - Text-->
                                <p class="mb-5">
                                    <tr>
                                        <td>AJ Katzenmaier Elementary</td>
                                        <td>24 W. Walton St., Chicago, IL 60610</td>
                                    </tr>
                                </p>
                                <button class="btn btn-primary" data-dismiss="modal">
                                    <i class="fas fa-times fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- location Modal 2-->
    <div class="location-modal modal fade" id="locationModal2" tabindex="-1" role="dialog"
        aria-labelledby="locationModal2Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                </button>
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <!-- location Modal - Title-->
                                <h2 class="location-modal-title text-secondary text-uppercase mb-0"
                                    id="locationModal2Label">Greenbay School</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <!-- location Modal - map-->
                                <div id="maps">
                                    <iframe class="img-fluid rounded mb-5"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845.1319545268863!2d-87.6385169564805!3d41.91373861895231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20Stati%20Uniti!5e0!3m2!1sit!2ses!4v1612950326125!5m2!1sit!2ses"
                                        width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""
                                        aria-hidden="false" tabindex="0"></iframe>
                                </div>
                                <!-- location Modal - Text-->
                                <p class="mb-5">
                                    <td>Greenbay Elementary</td>
                                    <td>1734 N. Orleans St., Chicago, IL 60614</td>
                                </p>
                                <button class="btn btn-primary" data-dismiss="modal">
                                    <i class="fas fa-times fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- location Modal 3-->
    <div class="location-modal modal fade" id="locationModal3" tabindex="-1" role="dialog"
        aria-labelledby="locationModal3Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                </button>
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <!-- location Modal - Title-->
                                <h2 class="location-modal-title text-secondary text-uppercase mb-0"
                                    id="locationModal3Label">Howard A Yeager School</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <!-- location Modal - Map-->
                                <iframe class="img-fluid rounded mb-5"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.590722234604!2d-87.66531398489063!3d41.92315627057299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20Stati%20Uniti!5e0!3m2!1sit!2ses!4v1612950434048!5m2!1sit!2ses"
                                    width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""
                                    aria-hidden="false" tabindex="0"></iframe>
                                <!-- location Modal - Text-->
                                <p class="mb-5">
                                    <td>Howard A Yeager Elementary</td>
                                    <td>2245 N. Southport Ave., Chicago, IL 60614</td>
                                </p>
                                <button class="btn btn-primary" data-dismiss="modal">
                                    <i class="fas fa-times fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- location Modal 4-->
    <div class="location-modal modal fade" id="locationModal4" tabindex="-1" role="dialog"
        aria-labelledby="locationModal4Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                </button>
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <!-- location Modal - Title-->
                                <h2 class="location-modal-title text-secondary text-uppercase mb-0"
                                    id="locationModal4Label">Marjorie P Hart School</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <!-- location Modal - Image-->
                                <iframe class="img-fluid rounded mb-5"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.78947241047285!2d-87.64620936071391!3d41.929529888900944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20Stati%20Uniti!5e0!3m2!1sit!2ses!4v1612950497057!5m2!1sit!2ses"
                                    width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""
                                    aria-hidden="false" tabindex="0"></iframe>
                                <!-- location Modal - Text-->
                                <p class="mb-5">
                                    <td>Marjorie P Hart Elementary</td>
                                    <td>2625 N. Orchard St., Chicago, IL 60614</td>
                                </p>
                                <button class="btn btn-primary" data-dismiss="modal">
                                    <i class="fas fa-times fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- location Modal 5-->
    <div class="location-modal modal fade" id="locationModal5" tabindex="-1" role="dialog"
        aria-labelledby="locationModal5Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                </button>
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <!-- location Modal - Title-->
                                <h2 class="location-modal-title text-secondary text-uppercase mb-0"
                                    id="locationModal5Label">North Elementary School</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <!-- location Modal - Map-->
                                <iframe class="img-fluid rounded mb-5"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3562837030117!2d-87.64765898489117!3d41.90669907160356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33a674ca85d%3A0x9940c7163c4950c5!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C%20Stati%20Uniti!5e0!3m2!1sit!2ses!4v1612950542941!5m2!1sit!2ses"
                                    width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""
                                    aria-hidden="false" tabindex="0"></iframe>
                                <!-- location Modal - Text-->
                                <p class="mb-5">
                                    <td>North Elementary</td>
                                    <td>1409 N. Ogden Ave., Chicago, IL 60610</td>
                                </p>
                                <button class="btn btn-primary" data-dismiss="modal">
                                    <i class="fas fa-times fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- location Modal 6-->
    <div class="location-modal modal fade" id="locationModal6" tabindex="-1" role="dialog"
        aria-labelledby="locationModal6Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><i class="fas fa-times"></i></span>
                </button>
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <!-- location Modal - Title-->
                                <h2 class="location-modal-title text-secondary text-uppercase mb-0"
                                    id="locationModal6Label">South Elementary School</h2>
                                <!-- Icon Divider-->
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                <!-- location Modal - Map-->
                                <iframe class="img-fluid rounded mb-5"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.747764826586!2d-87.65355538489074!3d41.91978077078429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101%20N%20Fremont%20St%2C%20Chicago%2C%20IL%2060614%2C%20Stati%20Uniti!5e0!3m2!1sit!2ses!4v1612950587807!5m2!1sit!2ses"
                                    width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""
                                    aria-hidden="false" tabindex="0"></iframe>
                                <!-- location Modal - Text-->
                                <p class="mb-5">
                                    <td>South Elementary</td>
                                    <td>2101 N. Fremont St., Chicago, IL 60614</td>
                                </p>
                                <button class="btn btn-primary" data-dismiss="modal">
                                    <i class="fas fa-times fa-fw"></i>
                                    Close Window
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </main>`
}

const Rules = {
    template: `<main>
    <section class="page-section" id="rules">
        <div class="container">
            <!-- Rules Section Heading-->
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0" id="title" >Northside Youth Soccer
                League</h2>
            <!-- Icon Divider-->
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <!-- Rules Section Form-->
            <div class="row">
                <div class="col-lg-8 mx-auto">
                    <div class="bodycontent">
                        <div id="titlecenter">
                            <h2>Rules of Play &amp; Policies</h2>
                            <p>FIFA rules shall govern NYSL play except as modified herein.</p>
                        </div>

                        <div id="rules">
                            <h2>Sportsmanship</h2>
                            <ul>
                                <li>The common interest that members of the Association share is to inspire youth to
                                    practice the ideals of
                                    sportsmanship and fair play. Any player, coach, team, parent, spectator,
                                    administrator or referee whose
                                    behavior detracts from this purpose is subject to disciplinary action regardless of
                                    technical soccer
                                    background, expertise, accomplishments or standing.</li>
                            </ul>

                            <h2>Fifa Field Regulations</h2>
                            <ol>
                                <li>
                                    <h3>Dimensions.</h3> FIFA Law 1 provides for flexible external field dimensions
                                    within a given maximum and
                                    minimum width and length. These dimensions should be adhered to for all fields used
                                    by teams under 12 and
                                    older.
                                </li>

                                <li>
                                    <h3>Competition Fields.</h3> Fields used within the competition program must be a
                                    minimum of 100 x 60 yards.
                                    Leagues, districts or associations participating in the state competition program
                                    that are unable to provide a
                                    field that meets these minimum requirements must advise the State Competition Board
                                    which will assign its
                                    Fields Committee to inspect the field and recommend to the Board whether or not a
                                    waiver of the minimum
                                    dimensions should be granted. Teams from leagues, districts or associations that are
                                    unable to provide an
                                    acceptable field may be required to play all their games away.
                                </li>

                                <li>
                                    <h3>Fields Used By Young Age Groups.</h3>
                                    <ol type="a">
                                        <li>U-6 play on a field approximately 20 X 40 yards with no penalty areas.
                                            Fields for older age groups
                                            should be progressively larger.</li>
                                        <li>U-8 plays on a field 40-50 yards in length and 20-30 yards width.</li>
                                        <li>U-10 play on a field 70-80 yards in length and 40-50 yards in width.</li>
                                        <li>In addition, fields used by young age groups may have their internal
                                            dimensions and size of goal
                                            similarly modified.</li>
                                    </ol>
                                </li>

                                <li>
                                    <h3>Team Bench Areas</h3>
                                    <ol type="a">
                                        <li>Recreation &amp; District Programs
                                            <ul>
                                                <li>The decision for team/spectator placement on the field will be made
                                                    by the governing body of that
                                                    team. A team's bench area shall consist of that area at least one
                                                    (1) yard away from the touchline and
                                                    extending to twenty yards (20) both ways from the halfway line. In
                                                    the event that field 2 conditions
                                                    require team benches to be on the same side of the field, a team's
                                                    bench area shall consist of that
                                                    area two(2) yards away from the touchline and extending twenty yards
                                                    one (1) way from the halfway
                                                    line.</li>
                                                <li>The home team has first choice as to where it wishes to locate its
                                                    bench area. Coaches and
                                                    substitutes are required to remain within their bench area during
                                                    the game. Parents and spectators
                                                    should occupy the same side of the field as the team they are
                                                    supporting.</li>
                                            </ul>
                                        </li>
                                        <li>State Competition League Only
                                            <ul>
                                                <li>Except where it is determined by the referee to be impractical, team
                                                    bench areas shall be along the
                                                    same touchline. Each team bench area shall be located two yards
                                                    outside the touchline, beginning not
                                                    closer than five yards from midfield and extending not further than
                                                    twenty yards from midfield. The
                                                    home team shall have the right to choose the location of its bench
                                                    area. Coaches and substitutes must
                                                    remain within their team's bench area during the game.</li>
                                                <li>Parents and spectators must occupy the sideline opposite the team
                                                    bench areas. Supporters of a team
                                                    must assemble on the side of the midfield facing the team bench area
                                                    of that team. There shall be a
                                                    buffer zone extending ten yards on each side of the midfield that
                                                    may not be occupied by parents or
                                                    spectators. Match officials shall be empowered to enforce these
                                                    provisions and may suspend or
                                                    terminate games in the event that any team, coach, parent, or
                                                    spectator declines to abide by requests
                                                    from match officials to comply with these standards.</li>
                                            </ul>
                                        </li>
                                    </ol>
                                </li>
                            </ol>

                            <h2>Equipment</h2>
                            <ul>
                                <li>We will abide by and accept equipment standards as defined by FIFA, USSF and USYSA.
                                </li>
                            </ul>

                            <h2>Number of Players</h2>
                            <ul>
                                <li>
                                    <h3>Team Size.</h3> Except as noted below, below, team rosters shall consist of not
                                    less than eleven nor more
                                    than eighteen players. A team must have at least seven (7) players present and able
                                    to play before referees
                                    are permitted to start a sanctioned game. No more than eleven (11) players per team
                                    may be on the field at any
                                    one time during the game.
                                </li>
                                <li>
                                    <h3>Size of Age Group Teams.</h3> In order to give player's maximum opportunity to
                                    develop in the game of
                                    soccer, U-6 through U-1O play modified rules and size of roster as stated in United
                                    States Youth Soccer
                                    Association (USYSA) rules. It is strongly recommended that U-6 and U-8 play 4 v 4.
                                    UYSA shall not sanction
                                    games involving teams under 10 or younger unless such games are conducted with not
                                    more than eight (8) players
                                    per side. (National rule 4036 section 2)
                                </li>
                                <li>Recreational/Developmental players at other ages or where numbers in the playing
                                    area are low are strongly
                                    encouraged to play small-sided games on reduced field size.</li>
                            </ul>

                            <h2>Substitutions</h2>
                            <ul>
                                <li>Teams may make an unlimited number of substitutions at the times indicated below. A
                                    player who has been
                                    replaced may re-enter the game as a substitute at a later time.
                                    <ol>
                                        <li>Prior to a throw-in your favor.</li>
                                        <li>Prior to a goalkick by either team.</li>
                                        <li>After a goal by either team.</li>
                                        <li>After an injury, by either team, when the referee stops play.</li>
                                        <li>At half time.</li>
                                        <li>When a player has been &quot;cautioned&quot;, only the player receiving
                                            &quot;caution&quot; may be
                                            substituted.</li>
                                    </ol>
                                </li>
                            </ul>

                            <h2>Confiscated Player Passes</h2>
                            <ul>
                                <li>Passes of any individual(s) ejected from any match shall be retained after the match
                                    by the referee. The
                                    pass of any individual who has received a third caution (yellow card) during a
                                    playing year shall be
                                    confiscated by the referee at the conclusion of the match in which the third caution
                                    was received. That player
                                    will be suspended from playing in the next game in which the offending participant
                                    would otherwise be eligible
                                    to participate. This process will continue so that for every third yellow card
                                    received during a playing year,
                                    the player will be suspended from playing in the next game (after the receipt of a
                                    third yellow card) for
                                    which the offending participate would otherwise be eligible to participate. The
                                    referee shall deliver all
                                    confiscated passes to the UYSA State Office within forty-eight (48) hours of the
                                    conclusion of the match.</li>
                            </ul>

                            <h2>All-Play</h2>
                            <ul>
                                <li>All-play means that every recreation player on every team shall play at least fifty
                                    percent of each game.
                                    Coaches in the competition program are encouraged to play their players 50% of each
                                    game.
                                    <ul style="list-style-type:circle;">
                                        <li>A Coach shall be permitted to not play a player 50% of each game under
                                            special circumstances, e.g.,
                                            unexcused absences from practice and/or games, ungentlemanly conduct at
                                            practice and/or games, and
                                            injuries.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h2>Player's Equipment</h2>
                            <ul>
                                <li>Where the uniform colors of both teams are so similar that the referee orders a
                                    change, the designated home
                                    team must change to colors distinct from those of the opponent.</li>
                            </ul>

                            <h2>Mixed Teams</h2>
                            <ul>
                                <li>
                                    <h3>Girls Playing On Boys' Teams.</h3> Girls are eligible to play on boys'teams with
                                    parent/guardian
                                    permission.
                                </li>
                                <li>
                                    <h3>Types of Teams.</h3> Teams with females only are Girls Teams. All others are
                                    Boys Teams.
                                </li>
                            </ul>

                            <h2>Coaching from the Sidelines</h2>
                            <ul>
                                <li>Coaching from the sidelines, i.e., giving direction to one's own team on points of
                                    strategy and position, is
                                    permitted provided that:
                                    <ol>
                                        <li>No mechanical, electrical or other devices are used to amplify the voice.
                                        </li>
                                        <li>The tone of voice is informative and not a harangue.</li>
                                        <li>The coaching takes place within the team's bench area.</li>
                                        <li>No coach, substitute, player or spectator is to make derogatory remarks or
                                            gestures to the referees,
                                            linesmen, players, substitutes or spectators.</li>
                                        <li>No coach, player, substitute or spectator is to use profanity or incite, in
                                            any manner, disruptive
                                            behavior of any kind.</li>
                                    </ol>
                                </li>
                            </ul>

                            <h2>Game Termination</h2>
                            <ul>
                                <li>Any game terminated after 15 minutes into the second half by the referee by reason
                                    of the elements, or by
                                    reason of grave disorder on the part of the coaches, players or spectators of a team
                                    that is losing at the
                                    point that the game is terminated, shall stand as a completed game. If a team is
                                    ahead and the game is called
                                    because of their actions they will lose the game 1-0.
                                </li>
                            </ul>

                            <h2>Conditions of Replay of Games</h2>
                            <ul>
                                <li>Any game which is required to be replayed as a result of any protest orappeal, shall
                                    be subject to the
                                    following conditions:
                                    <ol>
                                        <li>The game shall be replayed on the same field, as was the suspended or
                                            protested game, unless otherwise
                                            agreed by the coaches.</li>
                                        <li>Impartial referees shall be assigned to the new game.</li>
                                        <li>The PROTEST AND APPEALS COMMITTEE shall have the power to impose such
                                            additional conditions on the
                                            replay of the game, as it deems appropriate under the circumstances.</li>
                                    </ol>
                                </li>
                            </ul>

                            <h2>Referee Responsibilities</h2>
                            <ul>
                                <li> The referee shall verify the identity of the players and coaches with his/her
                                    player pass. He shall collect
                                    the passes of those players and coaches who are to participate in the game. The
                                    referee must allow no player
                                    into the game for whom he/she has no pass.</li>
                                <li>Upon completion of the game, the referee shall send his/her report to the UYSA
                                    offices within four (4) days,
                                    holidays excluded. If a coach or a player is ejected, the referee report form is
                                    required within forty-eight
                                    (48) hours along with the player/coach pass.</li>
                                <li>A referee report form must be filed for every game played.</li>
                                <li>Each team must determine whether or not referees are registered prior to the start
                                    of each game. Upon
                                    request, referees officiating at any game must willingly and without bias, show
                                    documentation regarding their
                                    certification level and registration standing with the USSF to coach, assistant
                                    coach, or team captain of
                                    teams participating in that game. Prior to the game a coach may decide to postpone
                                    the game if the referees do
                                    not produce the requested documentation. The game is to be replayed at a later date.
                                </li>
                                <li>Referees not complying with this section will be referred to the Disciplinary
                                    Committee.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Copyright Section-->
    <div class="copyright py-4 text-center text-white">
        <div class="container"><small> © Northside Youth Soccer League 2021 </small></div>
    </div>

    </main>`
}

const Contact = {
    template: `<main>
    <div class="footer text-center" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <div class="bodycontent">
                    </div>
                </div>
                <div class="col-lg-4 mb-5 mb-lg-0" id="footer">
                    <p>Please email us at <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a></p>
                    <p>We will reply to your email as soon as we can.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Copyright Section-->
    <div class="copyright py-4 text-center text-white">
        <div class="container"><small> © Northside Youth Soccer League 2021 </small></div>
    </div>
    </main>`
}

const Messages = {
    template: `<main>
    <section>
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fas fa-times"></i></span>
            </button>
            <div class="modal-body text-center">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <!-- info Modal - Title-->
                            <h4 class="location-modal-title text-secondary mb-0">Message Board:</h4>
                            <br>
                            <!-- Messages Section -->
                            <section class="messageBoard">
                                <!-- Navigation Bar -->
                                <div>
                                    <div class="mdl-tab">
                                        <div id="menu-recent"
                                            class="is-active mdl-button mdl-js-button mdl-js-ripple-effect">
                                            <i class="material-icons">new_releases</i>
                                            Recent
                                        </div>
                                        <div id="menu-my-posts"
                                            class="mdl-button mdl-js-button mdl-js-ripple-effect">
                                            <i class="material-icons">home</i> My posts
                                        </div>
                                        <div id="menu-my-top-posts"
                                            class="mdl-button mdl-js-button mdl-js-ripple-effect">
                                            <i class="material-icons">trending_up</i> My
                                            top posts
                                        </div>
                                        <button
                                            class="mdl-button mdl-js-button mdl-button--fab mdl-color--green-400 mdl-shadow--4dp mdl-js-ripple-effect"
                                            id="add">
                                            <i class="material-icons">mode_edit</i>
                                        </button>
                                    </div>
                                </div>
                                
                                    <!-- Show the add post form -->
                                    <section class="mdl-grid content" id="add-post" style="display:none">
                                        <div class="mdl-cell mdl-cell--12-col mdl-grid">
                                            <!-- Card containing the inputs to add a new messages -->
                                            <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet
                          mdl-cell--6-col-desktop">
                                                <div class="mdl-card__title mdl-color-text--white">
                                                    <h3 class="mdl-card__title-text">New
                                                        Post</h3>
                                                </div>
                                                <div class="mdl-card__supporting-text mdl-color-text--grey-600">
                                                    <form id="message-form" action="#">
                                                        <div
                                                            class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                                            <input class="mdl-textfield__input" type="text"
                                                                id="new-post-title">
                                                            <label class="mdl-textfield__label"
                                                                for="new-post-title">Post
                                                                title...</label>
                                                        </div>
                                                        <div
                                                            class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                                            <textarea class="mdl-textfield__input" rows="3"
                                                                id="new-post-message"></textarea>
                                                            <label class="mdl-textfield__label"
                                                                for="new-post-message">Post
                                                                message...</label>
                                                        </div>
                                                        <a href="#/gameInfo"></i>Go Back to Game Table</a>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <!-- Show a list of recent posts -->
                                    <section class="mdl-grid content" id="recent-posts-list" style="display:none">
                                        <div class="posts-container mdl-cell mdl-cell--12-col mdl-grid">
                                        </div>
                                    </section>
                                    <!-- Show the list of user's posts -->
                                    <section class="mdl-grid content" id="user-posts-list" style="display:none">
                                        <div class="posts-container mdl-cell mdl-cell--12-col mdl-grid">
                                        </div>
                                    </section>
                                    <!-- Show the list of top user's posts -->
                                    <section class="mdl-grid content" id="top-user-posts-list" style="display:none">
                                        <div class="posts-container mdl-cell mdl-cell--12-col mdl-grid">
                                        </div>
                                    </section>
                                
                            </section><br>
                            <a href="#/gameInfo"></i>Go Back to Game Table</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



    </main>`
}


const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/registration', component: Registration },
        { path: '/gameInfo', component: GameInfo },
        { path: '/locations', component: Locations },
        { path: '/rules', component: Rules },
        { path: '/contact', component: Contact },
        { path: '/messages', component: Messages },
        
    ]
})

const App = {
    el: '#app',
    router,
    template: `<div>
    <nav>
        <router-link to="/">NYSL</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/registration">Registration</router-link>
        <router-link to="/gameInfo">Game Info</router-link>
        <router-link to="/locations">Locations</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/messages">Messages</router-link>
    </nav>
    <router-view></router-view>
</div>`
}