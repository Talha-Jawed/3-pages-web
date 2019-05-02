import React from 'react';
import '../App.css';
import Footer from './Footer'

var list = [{
  num: 1,
  text: 'Getting start'
},
{
  num: 2,
  text: 'About the Pickup'
},
{
  num: 3,
  text: 'About the cable drum'
},
{
  num: 4,
  text: 'About the Cash Back'
},
{
  num: 5,
  text: 'About Charity Donations'
}
]

var listContent = [{
  title: 'Getting Start',
  listItem: [{
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  },
  ]
},
{
  title: 'About the Pickup',
  listItem: [{
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  },
  ]
},
{
  title: 'Getting Starts',
  listItem: [{
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  }, {
    text: 'To tem facculrro magnat landom as valest, omnisi?'
  },
  ]
}
]

function QA() {
  return (
    <div>
      <div className='QA' >
        <div className='QA-header'>
          <div>
            <p className='QA-headerText'>drumster.</p>
          </div>
          <div>
            <p>=</p>
          </div>
        </div>
      </div>
      <div className='QA-title'>
        <div className='leftSide'></div>
        <div className='title-QA'>
          <text className='QA-heading'>Q&A</text>
          <p className='QA-titleText'>Har finner du svaren pa de vanligest <br /> fragorner Finner du innite det du Soker ar du <br /> valkommem att  kontakta ass via chatten.</p>
        </div>
      </div>
      <div>
        <div className="termAndConditionContent">
          <div className='leftSide'></div>
          <div className="table-content QAtable">
            <div className='content-margin'>
              <text className='titleTableContent'>Table of Contents</text>
            </div>
            {
              list.map((item, index) => {
                return (
                  <div>
                    <p className='listItem'>{`${item.num}. ${item.text}`}</p>
                  </div>
                )
              })
            }
          </div>
          <div className="content-view">
            {
              listContent.map((item, index) => {
                return (
                  <div className='QA-listContent'>
                    <div className='QA-listContent'>
                      <text className='listContent-title'>{item.title}</text>
                    </div>
                    {
                      item.listItem.map((i, index) => {
                        return (
                          <div className='listItemQA'>
                            <p className='listItem-text'>{`+  ${i.text}`}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </div>
          <div className='rightSide'></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default QA;
