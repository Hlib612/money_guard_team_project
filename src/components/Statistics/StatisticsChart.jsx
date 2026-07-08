import { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';
import styles from '../../css_modules/Statistics.module.css';

Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

const StatisticsChart = ({ categoryStats, balance }) => {
  const canvasRef = useRef(null);
  const chartRef  = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) { chartRef.current.destroy(); chartRef.current = null; }

    const isEmpty = !categoryStats || categoryStats.length === 0;

    chartRef.current = new Chart(canvasRef.current, {
      type: 'doughnut',
      data: {
        labels: isEmpty ? ['No data'] : categoryStats.map(c => c.label),
        datasets: [{
          data: isEmpty ? [1] : categoryStats.map(c => c.amount),
          backgroundColor: isEmpty ? ['rgba(255,255,255,0.08)'] : categoryStats.map(c => c.color),
          borderWidth: 0,
          hoverOffset: 6,
        }],
      },
      options: {
        cutout: '60%',
        plugins: { legend: { display: false }, tooltip: { enabled: !isEmpty } },
        animation: { animateRotate: true, duration: 600 },
      },
    });

    return () => { if (chartRef.current) { chartRef.current.destroy(); chartRef.current = null; } };
  }, [categoryStats]);

  return (
    <div className={styles.chartWrapper}>
      <canvas ref={canvasRef} />
      <div className={styles.chartCenter}>
        <span className={styles.chartCenterAmount}>
          &#8372; {balance.toLocaleString('uk-UA', { minimumFractionDigits: 2 })}
        </span>
      </div>
    </div>
  );
};

export default StatisticsChart;