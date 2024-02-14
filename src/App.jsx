import { Collapse } from 'antd';
import styles from './App.module.css'; 
import accordionData from './AccordionData';

const Accordian = () => {

  return (
    <div className={styles.accordian}>
      <h1 className={styles.faqs}>FAQs</h1>
      <div className={styles.accordianList}>
        <Collapse className={styles.frax} expandIconPosition="right">
          {accordionData.map(({ header, content }, index) => (
            <Collapse.Panel header={header} key={index}>
              {content}
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default Accordian;