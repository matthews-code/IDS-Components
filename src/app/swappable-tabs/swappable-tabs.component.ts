import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swappable-tabs',
  templateUrl: './swappable-tabs.component.html',
  styleUrls: ['./swappable-tabs.component.css'],
})
export class SwappableTabsComponent implements OnInit {
  data: any = {
    bltFiles: [
      {
        id: 'ssUICombobox.blt',
        text: 'ssUICombobox',
      },
      {
        id: 'ssUIListClassA.blt',
        text: 'ssUIListClassA',
      },
      {
        id: 'tstListRegressComposite2Chart.blt',
        text: 'tstListRegressComposite2Chart',
      },
      {
        id: 'tstListRegressComposite2List.blt',
        text: 'tstListRegressComposite2List',
      },
    ],
  };
  onClickButton(content: string) {
    // Log the content of the button
    console.log('selected sheet:', content);
  }

  ngOnInit(): void {
    const swappable: any = document.querySelector('#swappable-blt');
    this.data.bltFiles.forEach((d: any) => {
      const swappableItem = document.createElement('ids-swappable-item');
      const button = document.createElement('ids-button');

      button.setAttribute('appearance', 'primary');
      button.setAttribute('icon', 'folder');
      button.setAttribute('width', '100%');
      button.setAttribute('colorVariant', 'alternate');
      button.innerText = d.id;

      // Add a click event listener to the button
      button.addEventListener('click', () => this.onClickButton(d.id));

      swappableItem.appendChild(button);
      swappable.appendChild(swappableItem);
    });
  }
}
