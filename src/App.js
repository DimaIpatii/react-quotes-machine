
class QuoteApp extends React.Component{
    constructor(props){
      super(props)
      
      this.state = {
        quote : "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author : "Thomas Edison",
        showQuote : true
      }
      
      this.getQuote = this.getQuote.bind(this);
    }
    
   async getQuote(){
     
     this.setState({showQuote : !this.state.showQuote});
     
      try{
        const getQuote = await fetch("https://type.fit/api/quotes");
        const quotes = await getQuote.json();
        const index = Math.floor(Math.random(0) * quotes.length)
        const {text : quote, author} = quotes[index];
        
        this.setState({showQuote : true});
        
        this.setState({quote, author});
      }catch{
        alert('Cannot find a Quote! Please try again..');
      }
     
    }
    
    render(){
      const {showQuote} = this.state;
      
      let AnimateQuote;
      let AnimateAuthor;
      let AnimateQuotesTop;
      let AnimateQuoteBottom
      
      if(this.state.showQuote){  
        AnimateQuote = 'showText';
        AnimateAuthor = 'showAuthor';
        AnimateQuotesTop = 'showQuoteSymbolTop';
        AnimateQuoteBottom = 'showQuoteSymbolBottom'
      }else{
        AnimateQuote = '';
        AnimateAuthor = '';
        AnimateQuotesTop = '';
        AnimateQuoteBottom = '';
      }
      
      
      
      return(
        <React.StrictMode>
          <div id="quote-box" className="wrapper__main main">
            <blockquote id="text" className="main__blockquote blockquote">
              <div className="quote-symbols quote-symbols_top">
                <div className={"quote-symbol quote-symbol_1 " + AnimateQuotesTop}></div>
                <div className={"quote-symbol quote-symbol_2 " + AnimateQuoteBottom}></div>
              </div>
              
              {/*Quote here:*/}
              <p className={'quote ' + AnimateQuote}>{this.state.quote}</p>
  
              <div className="quote-symbols quote-symbols_bottom">
                <div className={"quote-symbol quote-symbol_3 " + AnimateQuotesTop}></div>
                <div className={"quote-symbol quote-symbol_4 " + AnimateQuoteBottom}></div>
              </div>
  
              {/*Authore here:*/}
            <a id="author" href="#" rel="author" className={"blockquote__author author " + AnimateAuthor}>
              - {this.state.author}
            </a>
          </blockquote>
  
          <div className="main__navigation navigation">
            <a id="tweet-quote" href="https://twitter.com/intent/tweet" className="btn btn_tweet">tweet</a>
  
            <button type="submit" id="new-quote" className="btn btn_next" onClick={this.getQuote}>Next</button>
          </div>
         </div>
       </React.StrictMode>
      )
    }
  }
  
  ReactDOM.render(<QuoteApp />, document.getElementById('wrapper'));