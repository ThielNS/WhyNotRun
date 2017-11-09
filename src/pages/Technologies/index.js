import React from 'react';
import TabFilter from '../../components/CardTech/TabFilter';
import VisibleTechs from '../../containers/VisibleTechs'


const Technologies = () => (
    <div className="content-techs">
        <TabFilter />
        <VisibleTechs />
    </div>
);

export default Technologies;