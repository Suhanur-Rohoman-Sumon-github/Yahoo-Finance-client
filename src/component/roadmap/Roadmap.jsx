import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaAlipay } from 'react-icons/fa';
import { roadmaps } from '../../data/data';

const Roadmap = () => {
    return (
        <div className="green-bg my-20">
            <div className='text-center pt-5'>
                <h1 className="primary-text text-center mt-5">Product <span className="text-green-500">Roadmap</span> </h1>
                <p className="secendary-text  my-5">A product roadmap shows the path ahead, helps teams plan, and guides the delivery of the product.</p>
            </div>
            <VerticalTimeline>
                {roadmaps.map((roadmap, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(30, 108, 57,0.5) ', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(30, 108, 57)' }}

                        iconStyle={{ background: 'rgb(30, 108, 57)', color: '#fff' }}
                        icon={<FaAlipay />}
                    >
                        <h3 className="text-3xl font-bold">{roadmap.title}</h3>
                        <p className='secendary-text'>{roadmap.description}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Roadmap;
