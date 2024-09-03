// MainView.jsx
import  { useState, useEffect } from 'react';
import Search from '../components/Search';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import style from '../styles/pages/HomePage.module.scss';
import Card from '../components/Card';
import { IGuild } from '../utils';
import clsx from 'clsx';
import { useAlert } from '../components/Alert/context';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [guilds, setGuilds] = useState<IGuild[]>([]);
  const [filteredGuilds, setFilteredGuilds] = useState<IGuild[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const cardsPerPage = 9;
  const { showAlert } = useAlert();

  const sortedGuilds = filteredGuilds.length > 0 ? filteredGuilds.sort((a, b) => {
    if (a.isBot && !b.isBot) {
      return -1;
    }
    if (!a.isBot && b.isBot) {
      return 1;
    }
    return 0;
  }) : filteredGuilds;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch('http://localhost:4000/api/user/guilds', {
        method: 'GET',
        credentials: 'include',
      });

      if (!response.ok) {
        const data = await response.json();
        showAlert(data.message || 'Ошибка полученния гильдий');
        return;
      }
      const guildsData: IGuild[] = await response.json();
      setFilteredGuilds(guildsData);
      setGuilds(guildsData);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = guilds.filter((guild) =>
      guild.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredGuilds(filtered);
    setCurrentPage(1);
  }, [searchQuery, guilds]);


  const totalPages = Math.ceil(filteredGuilds.length / cardsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, filteredGuilds.length);
  const currentCards = filteredGuilds.slice(startIndex, endIndex);

  return (
    <div className={clsx('container', style.container)}>
      <div className={style.search}>
        <Search setSearchQuery={setSearchQuery} />
      </div>
      <div className={style.serversContainer}>
        <div className={style.serverContainer}>
          {!isLoading && sortedGuilds.length == 0 ? (
            <text>Не найденно</text>
          ) : (
            currentCards.map((guild) => (
              <Card key={guild.id} guild={guild} />
            ))
          )}
        </div>
      </div>
      <div className={style.pagination}>
        <button
          onClick={handlePreviousPage}
          className={style.pageButton}
          disabled={currentPage === 1}
        >
          <LeftOutlined />
        </button>
        <span className={style.pageInfo}> {currentPage} </span>
        <button
          onClick={handleNextPage}
          className={style.pageButton}
          disabled={currentPage === totalPages}
        >
          <RightOutlined />
        </button>
      </div>
      <p className={style.totalPages}>Total {filteredGuilds.length} servers</p>
    </div>
  );
};

export default HomePage;
