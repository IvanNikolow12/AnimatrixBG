import './HelpSection.css'

import SendCoffeBar from "./HelpSectionComponents/SendCoffeBar";
import SendMoneyBar from "./HelpSectionComponents/SendMoneyBar";
import SearchByStyleBar from "./HelpSectionComponents/SearchByStyleBar";
import PopularThis from "./HelpSectionComponents/PopularThis";
import CommentsBar from './HelpSectionComponents/CommentsBar';

function HelpSection({allAnime}) {
    return <>
    <div className="help-section-container">

          <SendCoffeBar/>

          <SendMoneyBar/>

          <SearchByStyleBar/>

          <PopularThis allAnime={allAnime}/>
          
          <CommentsBar/>
        </div>
    </>
}

export default HelpSection;