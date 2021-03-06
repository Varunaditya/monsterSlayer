new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		logs: []

	},
	methods: {
		startGame: function(){
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.logs.unshift({isPlayer: false, text: 'The Game Has Started!'});
		},
		attack: function(){
			if(this.playerHealth > 0 & this.monsterHealth > 0){
				var playerDamage = this.randomNumberGenerator(3, 10);
				var monsterDamage = this.randomNumberGenerator(5, 12);
				this.monsterHealth -= playerDamage;
				this.playerHealth -= monsterDamage;
				this.logs.unshift({isPlayer: true, text: 'Player Damage: ' + playerDamage});
				this.logs.unshift({isPlayer: false, text: 'Monster Damage: ' + monsterDamage});
				this.winner();
			}
		},
		specialAttack: function(){
			if(this.playerHealth > 0 & this.monsterHealth > 0){
				var playerDamage = this.randomNumberGenerator(6, 13);
				var monsterDamage = this.randomNumberGenerator(5, 12);
				this.monsterHealth -= playerDamage;
				this.playerHealth -= monsterDamage;
				this.logs.unshift({isPlayer: true, text: 'Player Damage (Special Attack): ' + playerDamage});
				this.logs.unshift({isPlayer: false, text: 'Monster Damage: ' + monsterDamage});
				this.winner();
			}
		},
		healHealth: function(){
			if(this.playerHealth > 0 & this.monsterHealth > 0){
				if(this.playerHealth == 100){
					this.logs.unshift({isPlayer: true, text: 'Player Health Is Full - Healing Ability Has No Use'});
				}
				else{
					var monsterDamage = this.randomNumberGenerator(3, 7);
					this.playerHealth -= monsterDamage;
					var healingFactor = this.randomNumberGenerator(4, 10);
					this.playerHealth += healingFactor;
					this.logs.unshift({isPlayer: true, text: 'Player Health Healed: ' + healingFactor});
					this.logs.unshift({isPlayer: false, text: 'Monster Damage: ' + monsterDamage});
				}
			}	
		},
		giveUp: function(){
			this.gameIsRunning = false;
			this.logs = [];
		},
		randomNumberGenerator: function(min, max){
			return Math.max(Math.floor(Math.random() * max + 1), min);
		},
		winner: function(){
			if(this.playerHealth <= 0 & this.monsterHealth > 0){
				this.logs = [];
				this.logs.unshift({isPlayer: false, text: 'You Have Lost!'});
			}
			else if(this.monsterHealth <= 0 & this.playerHealth > 0){
				this.logs = [];
				this.logs.unshift({isPlayer: true, text: 'You Have Won!'});
			}
		}
	}
});