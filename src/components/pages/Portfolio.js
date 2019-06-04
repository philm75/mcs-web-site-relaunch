import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import PortfolioItem from '../layout/PortfolioItem';
import PageHeader from '../layout/PageHeader';

import { exportCatchCerticates, iDMS, awm, pim, preciousMetals, cpc } from '../content/PortfolioContent';

const PortfolioPage = props => {

    return (
        <Fragment>
            <PageHeader name={'Our Portfolio'} />
            <div className="row">
                <PortfolioItem title={exportCatchCerticates.title} text={exportCatchCerticates.text} />
                <PortfolioItem title={iDMS.title} text={iDMS.text} />
            </div>
            <div className="row">
                <PortfolioItem title={awm.title} text={awm.text} />
                <PortfolioItem title={pim.title} text={pim.text} />
            </div>
            <div className="row">
                <PortfolioItem title={preciousMetals.title} text={preciousMetals.text} />   
                <PortfolioItem title={cpc.title} text={cpc.text} />        
            </div>
        </Fragment>
    );
}

export default withRouter(PortfolioPage);