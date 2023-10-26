import { Component, OnInit } from '@angular/core';
import treeProdLinesJSON from './tree-prodlines.json';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    const treeBLT: any = document.querySelector('#tree-blt');
    treeBLT.data = treeProdLinesJSON;

    treeBLT.addEventListener('selected', (e: any) => {
      console.info('selected:', e?.detail.node.data.id);
    });
  }
}
