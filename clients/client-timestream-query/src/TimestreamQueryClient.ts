// smithy-typescript generated code
import {
  EndpointDiscoveryInputConfig,
  EndpointDiscoveryResolvedConfig,
  resolveEndpointDiscoveryConfig,
} from "@aws-sdk/middleware-endpoint-discovery";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultTimestreamQueryHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { CancelQueryCommandInput, CancelQueryCommandOutput } from "./commands/CancelQueryCommand";
import {
  CreateScheduledQueryCommandInput,
  CreateScheduledQueryCommandOutput,
} from "./commands/CreateScheduledQueryCommand";
import {
  DeleteScheduledQueryCommandInput,
  DeleteScheduledQueryCommandOutput,
} from "./commands/DeleteScheduledQueryCommand";
import {
  DescribeAccountSettingsCommandInput,
  DescribeAccountSettingsCommandOutput,
} from "./commands/DescribeAccountSettingsCommand";
import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "./commands/DescribeEndpointsCommand";
import {
  DescribeScheduledQueryCommandInput,
  DescribeScheduledQueryCommandOutput,
} from "./commands/DescribeScheduledQueryCommand";
import {
  ExecuteScheduledQueryCommandInput,
  ExecuteScheduledQueryCommandOutput,
} from "./commands/ExecuteScheduledQueryCommand";
import {
  ListScheduledQueriesCommandInput,
  ListScheduledQueriesCommandOutput,
} from "./commands/ListScheduledQueriesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PrepareQueryCommandInput, PrepareQueryCommandOutput } from "./commands/PrepareQueryCommand";
import { QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import {
  UpdateScheduledQueryCommandInput,
  UpdateScheduledQueryCommandOutput,
} from "./commands/UpdateScheduledQueryCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | CancelQueryCommandInput
  | CreateScheduledQueryCommandInput
  | DeleteScheduledQueryCommandInput
  | DescribeAccountSettingsCommandInput
  | DescribeEndpointsCommandInput
  | DescribeScheduledQueryCommandInput
  | ExecuteScheduledQueryCommandInput
  | ListScheduledQueriesCommandInput
  | ListTagsForResourceCommandInput
  | PrepareQueryCommandInput
  | QueryCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccountSettingsCommandInput
  | UpdateScheduledQueryCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CancelQueryCommandOutput
  | CreateScheduledQueryCommandOutput
  | DeleteScheduledQueryCommandOutput
  | DescribeAccountSettingsCommandOutput
  | DescribeEndpointsCommandOutput
  | DescribeScheduledQueryCommandOutput
  | ExecuteScheduledQueryCommandOutput
  | ListScheduledQueriesCommandOutput
  | ListTagsForResourceCommandOutput
  | PrepareQueryCommandOutput
  | QueryCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccountSettingsCommandOutput
  | UpdateScheduledQueryCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;

  /**
   * The provider which populates default for endpointDiscoveryEnabled configuration, if it's
   * not passed during client creation.
   * @internal
   */
  endpointDiscoveryEnabledProvider?: __Provider<boolean | undefined>;
}

/**
 * @public
 */
export type TimestreamQueryClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  UserAgentInputConfig &
  HttpAuthSchemeInputConfig &
  EndpointDiscoveryInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of TimestreamQueryClient class constructor that set the region, credentials and other options.
 */
export interface TimestreamQueryClientConfig extends TimestreamQueryClientConfigType {}

/**
 * @public
 */
export type TimestreamQueryClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  EndpointDiscoveryResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of TimestreamQueryClient class. This is resolved and normalized from the {@link TimestreamQueryClientConfig | constructor configuration interface}.
 */
export interface TimestreamQueryClientResolvedConfig extends TimestreamQueryClientResolvedConfigType {}

/**
 * <fullname>Amazon Timestream Query
 *         </fullname>
 *          <p></p>
 * @public
 */
export class TimestreamQueryClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  TimestreamQueryClientResolvedConfig
> {
  /**
   * The resolved configuration of TimestreamQueryClient class. This is resolved and normalized from the {@link TimestreamQueryClientConfig | constructor configuration interface}.
   */
  readonly config: TimestreamQueryClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<TimestreamQueryClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveEndpointDiscoveryConfig(_config_7, {
      endpointDiscoveryCommandCtor: DescribeEndpointsCommand,
    });
    const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
    super(_config_9);
    this.config = _config_9;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
        identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
  private getDefaultHttpAuthSchemeParametersProvider() {
    return defaultTimestreamQueryHttpAuthSchemeParametersProvider;
  }
  private getIdentityProviderConfigProvider() {
    return async (config: TimestreamQueryClientResolvedConfig) =>
      new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
      });
  }
}
