export const filterData = (data, filterBy, component_props) => {
      const groups = data.reduce((acc, item) => {
      const group = item[filterBy];
      
      

      if (!acc[group]) {
        acc[group] = [item];
      } else {
        acc[group].push(item);
      }
      return acc;
    }, {});

    const groupNames = Object.keys(groups);
    return(
      groupNames.map((groupName, j) => {

        const addGroupToEditable = (group) => {
          group.forEach((item) => {
            console.log(item.id);
            component_props.addToEditable(item.id);
          });
        }

        const group = groups[groupName];
        const groupElements = group.map((item, i) => (
          <component_props.Component
            id={item.id}
            i={i}
            handleChange={component_props.handleChange}
            key={i}
            schedule={data}
            addToEditable={component_props.addToEditable}
            editableItems={component_props.editableItems}
          />
        ));
        return (
          <section key={j} className="mb-4">
            <div className="flex justify-between items-center w-fit gap-40">
              <h2 className="text-3xl font-bold">{groupName}</h2>
              <div>
                <label htmlFor={`${j}selectAll`}>Select All</label>
                <input onChange={() => addGroupToEditable(group)} type="checkbox" className="m-2" id={`${j}selectAll`} name="selectAll"/>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 items-center grid-flow-row gap-4">
              {groupElements}
            </div>
          </section>
        );
      })
    );

  }
