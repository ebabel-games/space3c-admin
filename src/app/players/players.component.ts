import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../mock-players';
import { Mission } from '../mission';
import { MISSIONS } from '../mock-missions';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[] = PLAYERS;
  missions: Mission[] = MISSIONS;

  constructor() {
  }

  ngOnInit(): void {
  }
}
