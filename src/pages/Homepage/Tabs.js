// @flow
import React, { useState, useEffect, useRef } from 'react';
import { find } from 'lodash/fp';
import { withRouter } from 'react-router-dom';

import styled from 'styled-components';
import connect from '../../state/connect';
import Word from './Word';
import theme from '../../configs/theme';

import TabDay from './TabDay';
import TabWeek from './TabWeek';
import TabMonth from './TabMonth';
import { Button } from '../../components';
import TabNotFound from './TabNotFound';

const TabHeadingStyle = styled.div`
  flex: 1;
  padding: 15px 10px;
  text-align: center;
  font-weight: 700;
  // text-transform: uppercase;
  position: relative;

  color: ${({ active }) => (active ? theme.color.primary : theme.color.text)};

  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    display: block;
    height: 2px;
    background: ${({ active }) => (active ? 'transparent' : 'transparent')};
  }
`;

const BarScroll = styled.div`
  height: 3px;
  width: ${({ number }) => `${100 / number}%`};
  transition: all 0.3s cubic-bezier(0.63, -0.33, 0.37, 1.36);
  background: ${theme.color.primary};
  position: absolute;
  bottom: -1px;
  z-isndex: 10;
  transform: ${({ active }) => `translateX(${(active - 1) * 100}%)`};
`;

const TabWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid #ddd;
  background: #fff;
  width: 100%;
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.63, -0.33, 0.37, 1.36);
`;

type TabHeadingProps = {
  title: String,
  onClick: Function,
  active: Boolean
};

const TabHeading = ({ title, onClick, active, ...rest }: TabHeadingProps) => {
  return (
    <TabHeadingStyle onClick={onClick} active={active} {...rest}>
      {title}
    </TabHeadingStyle>
  );
};

const TabPanel = ({ children }) => children;

const enhance = connect([
  {
    values: ['wordsToday', 'reload'],
    context: 'wordContext'
  }
]);

const TabToday = enhance(({ wordsToday, reload }) => {
  const wordNotDone = find(w => w.status === false, wordsToday);

  return (
    <>
      {wordsToday.map((w, i) => (
        <Word
          key={w.word}
          word={{ ...w, number: i, type: w.type || 'today' }}
          type="today"
        />
      ))}

      {!wordNotDone && (
        <div style={{ margin: 30 }}>
          <Button type="primary" size="large" block onClick={reload}>
            Load more
          </Button>
        </div>
      )}
    </>
  );
});

const tabs = [
  {
    number: 1,
    id: 'today',
    component: TabToday
  },
  {
    number: 2,
    id: 'day',
    component: TabDay
  },

  {
    number: 3,
    id: 'week',
    component: TabWeek
  },
  {
    number: 4,
    id: 'month',
    component: TabMonth
  }
];

const getNumberActive = params => {
  if (!params) return tabs[0].number;

  const tabExist = find(t => t.id === params, tabs);

  if (!tabExist) return null;

  return tabExist.number;
};

const Tabs = ({ match, history }) => {
  const { params } = match;

  const [activeTab, setActiveTab] = useState(params.params || 'today');
  const [fixed, setFixed] = useState(false);

  const refTab = useRef();

  const handleChangeTab = e => {
    history.push(`/main/${e.target.id}`);
    setActiveTab(e.target.id);
  };

  const handleScroll = () => {
    if (window.scrollY >= refTab.current.offsetTop - 52) {
      return setFixed(true);
    }
    return setFixed(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const active = getNumberActive(params.params);

  return (
    <div>
      <TabWrap
        style={{
          position: fixed ? 'fixed' : 'relative',
          top: fixed ? '0' : 'auto'
        }}
      >
        <BarScroll active={active} number={4} />

        <TabHeading
          title="Today"
          onClick={handleChangeTab}
          id="today"
          active={activeTab === 'today'}
        />
        <TabHeading
          title="Day"
          onClick={handleChangeTab}
          id="day"
          active={activeTab === 'day'}
        />
        <TabHeading
          title="Week"
          onClick={handleChangeTab}
          id="week"
          active={activeTab === 'week'}
        />
        <TabHeading
          title="Month"
          onClick={handleChangeTab}
          id="month"
          active={activeTab === 'month'}
        />
      </TabWrap>

      <div ref={refTab}>
        {activeTab === 'today' && (
          <TabPanel className="tab">
            <TabToday />
          </TabPanel>
        )}

        {activeTab === 'day' && (
          <TabPanel className="tab">
            <TabDay />
          </TabPanel>
        )}

        {activeTab === 'week' && (
          <TabPanel className="tab">
            <TabWeek />
          </TabPanel>
        )}

        {activeTab === 'month' && (
          <TabPanel className="tab">
            <TabMonth />
          </TabPanel>
        )}

        {!active && (
          <TabPanel className="tab">
            <TabNotFound />
          </TabPanel>
        )}
      </div>
    </div>
  );
};

export default withRouter(Tabs);
