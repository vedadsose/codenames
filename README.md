## Codenames [![Build Status](https://travis-ci.org/vedadsose/codenames.svg?branch=master)](https://travis-ci.org/vedadsose/codenames)

Codenames is a 2015 board game designed by Vlaada Chvátil. The game is typically for two teams of at least two players each, but can also be played by two or three players with just one person simply acting as the "Spymaster" (i.e. clue-giver) for the other one or two. Rules for these variants are provided in the game instructions.

New 25 words are generated at the start of each game, and the team that has more words starts first. When the spymaster gives clues to players they make their guesses and the spymaster clicks on the words they guessed which get revealed instantly.

Since only spymasters can see all the words with their color before they were revealed we created a Chromecast Extension so other players can only see the color of revealed/guessed words.

## Screenshots

<h3 align="center">
  <img src="assets/screens.png" alt="Codenames Screens" />
</h3>

## Future
- I'd love to have support for more languages(only Bosnian/Croatian/Serbian is supported now), and everyone is invited to help.

- Write a better Rule section of the README (this one is just copied from Wikipedia)

## Development
Codenames is using webpack, to start a dev server run:
```
npm start
```

And to get a production build use: 
```
npm run build
```

## Rules
Codenames has an espionage setting, in which players in teams try to identify their own team's secret agents, based on their agents' code names. Codenames is a game of guessing which code names (words) in a set are related to a hint-word given by another player.

Players split into two teams: red and blue. One player of each team is selected as the team's spymaster; the others are field operatives.

There are three stacks of cards: code name cards, map cards, and identity cards. These will all be described later. (These descriptive names are used in this article, and are not taken from any official game source.)

Twenty-five code name cards, each bearing a word, are laid out in a 5×5 rectangular grid, in random order. The words are understood to be the code names assigned to twenty-five people. A number of these words represent red agents, a number represent blue agents, one represents a deadly assassin, and the others represent innocent bystanders.

The teams' spymasters are given a randomly-dealt map card showing a 5×5 grid of 25 squares of various colors, each corresponding to one of the code name cards on the table. The map card's squares thus mark the grid-positions of the agents of each color (colored either red or blue), the innocent bystanders (colored tan), and the assassin (colored black). Only the spymasters know the location of these or see the map. A small plastic stand is provided to hold the map card upright, also preventing the map from being rotated accidentally, since the orientation of the map must remain consistent with the code name (word) cards throughout the game. Each map card also indicates which team plays first in the game in which it is used; whichever team plays first has one more agent to uncover than does the other team. (There are four small rectangles, one on each side of the map grid, in the color of the team which plays first.)

Teams take turns. On each turn, the appropriate spymaster gives a hint about their agents' identities by giving verbal hints about the words on the respective cards. Each hint may only consist of one single word and a number. The spymaster should give a hint that is related to as many of the words on his/her own agents' cards as possible, but not to any others -- lest they accidentally lead their team to choose a card representing an innocent bystander, an opposing agent, or the assassin.

The hint's word can be chosen freely, as long as it is not (and does not contain) any of the words on the code name cards still showing at that time. (Code name cards will be covered as guesses are made; and covered words may be used as hints.) If the teams agree, two words that act as one might be permissible -- such as "Taj Mahal" or "Sean Connery" or "New York" -- but if a spymaster has any question about a hint they might give or about the meaning of any of the code name cards' words, they should simply ask the rival spymaster for a ruling, out of earshot of the field operatives.

The hint's number tells the field operatives how many words in the grid are related to the word of the clue. It also determines the maximum number of guesses the field operatives may make on that turn, which is the hint's number plus one. (This allows the field operatives, potentially, to find each of the hinted-at agents and then make one more guess, perhaps to follow up on a previous missed hint or take a desperate chance on a random guess.) Field operatives must make at least one guess per turn, risking a wrong guess and its consequences. They may also end their turn voluntarily at any point thereafter, since incorrect guesses have additional, worse consequences than simply ending the turn.

After a spymaster gives the hint with its word and number, their field operatives make guesses about which code name cards bear words related to the hint and point them out, one at a time. When a code name card is pointed out, the spymaster covers that card with an appropriate identity card -- a blue agent card, a red agent card, an innocent bystander card, or the assassin card -- as indicated on the spymasters' map of the grid. If the assassin is pointed out, the game ends immediately, with the team who identified him losing. If an agent of the other team is pointed out, the turn ends immediately, and that other team is also one agent closer to winning. If an innocent bystander is pointed out, the turn simply ends; but note that this also eliminates one more potential wrong guess that the other team might have made, right before their turn. If an agent of the playing team is pointed out, the team may point out another card if they have guesses left. Again, the maximum number of guesses in any turn is the hint's number plus one.

It is very important that the spymasters cover the code name cards with an identity card without giving any other clues, verbal or non-verbal, as to the field operatives' success in correctly using any hints. As much as possible, even emotional cues should be avoided. The field operatives should only know the identity uncovered each time. In particular, they should not know whether an uncovered agent of their own color was one that their spymaster meant to lead them to with that particular turn's hint or not. Such information really can affect later guesses and turns. (For instance, given a hint of "example 3", and identifying three of their agents but being told that one of them hadn't been one of those hinted at by "example 3", the players will naturally look for another code name related to the word "example" on that or a future turn. And if they are told that all three of their guesses were the ones hinted at, they won't possibly waste effort on looking for more related to that hint. The uncertainty and possible carry-over of hints between turns is part of the play.) Similarly, spymasters should avoid looking too closely at their own team's code name cards as the field operatives guess, and field operatives should avoid looking at the spymaster's eyes for hints.

The game ends when all of one team's agents are identified (winning the game for that team), or when one team has identified the assassin (losing the game). There is no "final turn to catch up"; the team which plays first already has to identify one more agent than the other team.

