export const schema = {
  models: {
    User: {
      name: 'User',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        name: {
          name: 'name',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        email: {
          name: 'email',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        imageUrl: {
          name: 'imageUrl',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'Users',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
    FeaturedExperiment: {
      name: 'FeaturedExperiment',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        experiment_id: {
          name: 'experiment_id',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        name: {
          name: 'name',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        primaryImage: {
          name: 'primaryImage',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        secondaryImage: {
          name: 'secondaryImage',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        status: {
          name: 'status',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        description: {
          name: 'description',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        duration: {
          name: 'duration',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        sponsor: {
          name: 'sponsor',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        sponsorIcon: {
          name: 'sponsorIcon',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: 'FeaturedExperiments',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {
    Stat: {
      name: 'Stat',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        dataType: {
          name: 'dataType',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
      },
    },
  },
  codegenVersion: '3.4.4',
  version: '1a70d0e855acb480c1018a09966f7050',
}
