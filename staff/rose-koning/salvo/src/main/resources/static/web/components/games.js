const Games = {
    template: `
  <div>
    <button v-on:click="logout()" class="button">Logout</button>
    <h1>Salvo!</h1>
    <div class="main-box">
      <ol id="games">
        <div v-for="(game, key) in games">
          <li>
            {{game.created}}
            <div v-for="(gamePlayer, key) in game.gamePlayers">
            {{gamePlayer.player.username}}
            <router-link v-bind:to="'/game/'+ gamePlayer.id" v-if="gamePlayer.isMine" class="button">return to game</router-link>
              <div v-if="game.gamePlayers.length!=2 && !gamePlayer.isMine">
              <button v-on:click="joinGame()" class="button">Join game</button>
              </div>
            </div>
         
          </li>
        </div>
      </ol>
    </div>
  
    <button v-on:click="createNewGame()">Start a new game</button>
   
  
  
  </div>`,
    data() {
      return {
        username: null,
        games: null,
        access: false,
      }
    },
    created() {
      getCurrentUser((error, username) => {
        if (error) return alert(error)
  
        this.username = username
  
        getGames(games => {
          games.forEach(game => {
            const { gamePlayers } = game
  
            gamePlayers.forEach(gamePlayer => {
              gamePlayer.isMine = gamePlayer.player.username === username
            })
          })
          this.games = games;
        })
      })
    },
    methods: {
      logout() {
        logoutUser(this.username, error => {
          if (error) return alert(error)
  
          this.$router.push("home");
        })
      },
      createNewGame() {
        createGame((gamePlayerObjectId, error) => {
          if (error) return alert(error)
  
          var gamePlayerId = Object.values(gamePlayerObjectId);
          this.$router.push({ path: `/game/${gamePlayerId}` })
        })
      },
      joinGame() {
        joinInGame((gamePlayerId, error) => {
          if (error) return alert(error)
  
          this.$router.push({ path: `/game/${gamePlayerId}` })
        })
      },
  
    }
  };