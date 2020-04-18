import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  player: Player = {
    id: 'fdsgfh324lkhfdlgdf32423',
    level: 0,
    x: 320,
    y: 267,
    mission: 2,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
