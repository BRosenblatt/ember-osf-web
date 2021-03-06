import { attr, hasMany } from '@ember-decorators/data';
import { computed } from '@ember-decorators/object';
import DS from 'ember-data';

import NodeModel from './node';
import OsfModel from './osf-model';
import RegistrationModel from './registration';
import UserModel from './user';

export interface Assets {
    logo: string;
}

export default class InstitutionModel extends OsfModel {
    @attr('string') name!: string;
    @attr('fixstring') description!: string;
    @attr('string') logoPath!: string;
    @attr('string') authUrl!: string;
    @attr('object') assets!: Partial<Assets>;

    @hasMany('user', { inverse: 'institutions' })
    users!: DS.PromiseManyArray<UserModel>;

    @hasMany('node', { inverse: 'affiliatedInstitutions' })
    nodes!: DS.PromiseManyArray<NodeModel>;

    @hasMany('registration', { inverse: 'affiliatedInstitutions' })
    registrations!: DS.PromiseManyArray<RegistrationModel>;

    @computed('assets', 'assets.logo', 'logoPath', 'id')
    get logoUrl(): string {
        if (this.assets && this.assets.logo) {
            return this.assets.logo;
        } else if (this.logoPath) {
            return this.logoPath;
        } else {
            return `/static/img/institutions/shields-rounded-corners/${this.id}-shield-rounded-corners.png`;
        }
    }
}

declare module 'ember-data/types/registries/model' {
    export default interface ModelRegistry {
        institution: InstitutionModel;
    } // eslint-disable-line semi
}
