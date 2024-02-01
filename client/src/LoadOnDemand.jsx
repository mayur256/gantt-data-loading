
import { GanttComponent, Inject, Selection, ColumnsDirective, ColumnDirective, VirtualScroll } from '@syncfusion/ej2-react-gantt';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

const LoadOnDemand = () => {
    const dataSource = new DataManager({
        url: 'https://services.syncfusion.com/react/production/api/GanttLoadOnDemand',
        adaptor: new WebApiAdaptor,
        crossDomain: true
    });
    const taskFields = {
        id: 'taskId',
        name: 'taskName',
        startDate: 'startDate',
        endDate: 'endDate',
        duration: 'duration',
        progress: 'progress',
        hasChildMapping: 'isParent',
        parentID: 'parentID'
    };
    const projectStartDate = new Date('01/02/2000');
    const projectEndDate = new Date('12/01/2002');
    return (<div className='control-pane'>
      <div className='control-section'>
        <GanttComponent id='LoadOnDemand' dataSource={dataSource} treeColumnIndex={1} taskFields={taskFields} enableVirtualization={true} loadChildOnDemand={false} height='460px' projectStartDate={projectStartDate} projectEndDate={projectEndDate}>
          <ColumnsDirective>
            <ColumnDirective field='taskId' width='80'></ColumnDirective>
            <ColumnDirective field='taskName' headerText='Job Name' width='250' clipMode='EllipsisWithTooltip'></ColumnDirective>
            <ColumnDirective field='startDate'></ColumnDirective>
            <ColumnDirective field='duration'></ColumnDirective>
            <ColumnDirective field='progress'></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Selection, VirtualScroll]}/>
        </GanttComponent>
      </div>

    </div>);
};
export default LoadOnDemand;
