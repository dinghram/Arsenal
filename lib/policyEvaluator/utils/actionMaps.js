const sharedActionMap = {
    bucketDelete: 's3:DeleteBucket',
    bucketDeletePolicy: 's3:DeleteBucketPolicy',
    bucketDeleteWebsite: 's3:DeleteBucketWebsite',
    bucketGet: 's3:ListBucket',
    bucketGetACL: 's3:GetBucketAcl',
    bucketGetCors: 's3:GetBucketCORS',
    bucketGetLifecycle: 's3:GetLifecycleConfiguration',
    bucketGetLocation: 's3:GetBucketLocation',
    bucketGetNotification: 's3:GetBucketNotificationConfiguration',
    bucketGetObjectLock: 's3:GetBucketObjectLockConfiguration',
    bucketGetPolicy: 's3:GetBucketPolicy',
    bucketGetReplication: 's3:GetReplicationConfiguration',
    bucketGetVersioning: 's3:GetBucketVersioning',
    bucketGetWebsite: 's3:GetBucketWebsite',
    bucketHead: 's3:ListBucket',
    bucketPutACL: 's3:PutBucketAcl',
    bucketPutCors: 's3:PutBucketCORS',
    bucketPutLifecycle: 's3:PutLifecycleConfiguration',
    bucketPutNotification: 's3:PutBucketNotificationConfiguration',
    bucketPutObjectLock: 's3:PutBucketObjectLockConfiguration',
    bucketPutPolicy: 's3:PutBucketPolicy',
    bucketPutReplication: 's3:PutReplicationConfiguration',
    bucketPutVersioning: 's3:PutBucketVersioning',
    bucketPutWebsite: 's3:PutBucketWebsite',
    listMultipartUploads: 's3:ListBucketMultipartUploads',
    listParts: 's3:ListMultipartUploadParts',
    multipartDelete: 's3:AbortMultipartUpload',
    objectDelete: 's3:DeleteObject',
    objectDeleteTagging: 's3:DeleteObjectTagging',
    objectGet: 's3:GetObject',
    objectGetACL: 's3:GetObjectAcl',
    objectGetLegalHold: 's3:GetObjectLegalHold',
    objectGetRetention: 's3:GetObjectRetention',
    objectGetTagging: 's3:GetObjectTagging',
    objectPut: 's3:PutObject',
    objectPutACL: 's3:PutObjectAcl',
    objectPutLegalHold: 's3:PutObjectLegalHold',
    objectPutRetention: 's3:PutObjectRetention',
    objectPutTagging: 's3:PutObjectTagging',
};

// action map used for request context
const actionMapRQ = Object.assign({
    bucketPut: 's3:CreateBucket',
    // for bucketDeleteCors need s3:PutBucketCORS permission
    // see http://docs.aws.amazon.com/AmazonS3/latest/API/
    // RESTBucketDELETEcors.html
    bucketDeleteCors: 's3:PutBucketCORS',
    bucketDeleteReplication: 's3:DeleteReplicationConfiguration',
    bucketDeleteLifecycle: 's3:DeleteLifecycleConfiguration',
    completeMultipartUpload: 's3:PutObject',
    initiateMultipartUpload: 's3:PutObject',
    objectDeleteVersion: 's3:DeleteObjectVersion',
    objectDeleteTaggingVersion: 's3:DeleteObjectVersionTagging',
    objectGetVersion: 's3:GetObjectVersion',
    objectGetACLVersion: 's3:GetObjectVersionAcl',
    objectGetTaggingVersion: 's3:GetObjectVersionTagging',
    objectHead: 's3:GetObject',
    objectPutACLVersion: 's3:PutObjectVersionAcl',
    objectPutPart: 's3:PutObject',
    objectPutTaggingVersion: 's3:PutObjectVersionTagging',
    serviceGet: 's3:ListAllMyBuckets',
    objectReplicate: 's3:ReplicateObject',
}, sharedActionMap);

// action map used for bucket policies
const actionMapBP = Object.assign({}, sharedActionMap);

// action map for all relevant s3 actions
const actionMapS3 = Object.assign({
    bucketGetNotification: 's3:GetBucketNotification',
    bucketPutNotification: 's3:PutBucketNotification',
}, sharedActionMap, actionMapRQ, actionMapBP);

const actionMapIAM = {
    attachGroupPolicy: 'iam:AttachGroupPolicy',
    attachUserPolicy: 'iam:AttachUserPolicy',
    createAccessKey: 'iam:CreateAccessKey',
    createGroup: 'iam:CreateGroup',
    createPolicy: 'iam:CreatePolicy',
    createPolicyVersion: 'iam:CreatePolicyVersion',
    createUser: 'iam:CreateUser',
    deleteAccessKey: 'iam:DeleteAccessKey',
    deleteGroup: 'iam:DeleteGroup',
    deleteGroupPolicy: 'iam:DeleteGroupPolicy',
    deletePolicy: 'iam:DeletePolicy',
    deletePolicyVersion: 'iam:DeletePolicyVersion',
    deleteUser: 'iam:DeleteUser',
    detachGroupPolicy: 'iam:DetachGroupPolicy',
    detachUserPolicy: 'iam:DetachUserPolicy',
    getGroup: 'iam:GetGroup',
    getGroupPolicy: 'iam:GetGroupPolicy',
    getPolicy: 'iam:GetPolicy',
    getPolicyVersion: 'iam:GetPolicyVersion',
    getUser: 'iam:GetUser',
    listAccessKeys: 'iam:ListAccessKeys',
    listGroupPolicies: 'iam:ListGroupPolicies',
    listGroups: 'iam:ListGroups',
    listGroupsForUser: 'iam:ListGroupsForUser',
    listPolicies: 'iam:ListPolicies',
    listPolicyVersions: 'iam:ListPolicyVersions',
    listUsers: 'iam:ListUsers',
    putGroupPolicy: 'iam:PutGroupPolicy',
    removeUserFromGroup: 'iam:RemoveUserFromGroup',
    updateAccessKey: 'iam:UpdateAccessKey',
    updateGroup: 'iam:UpdateGroup',
    updateUser: 'iam:UpdateUser',
    getAccessKeyLastUsed: 'iam:GetAccessKeyLastUsed',
    generateCredentialReport: 'iam:GenerateCredentialReport',
    getCredentialReport: 'iam:GetCredentialReport',
};

const actionMapSSO = {
    SsoAuthorize: 'sso:Authorize',
};

const actionMapSTS = {
    assumeRole: 'sts:AssumeRole',
};

const actionMapMetadata = {
    admin: 'metadata:admin',
    default: 'metadata:bucketd',
};

module.exports = {
    actionMapRQ,
    actionMapBP,
    actionMapS3,
    actionMapIAM,
    actionMapSSO,
    actionMapSTS,
    actionMapMetadata,
};